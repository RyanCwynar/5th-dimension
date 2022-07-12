/*
Crafted with love by
Fueled on Bacon
https://fueledonbacon.com
*/
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract FifthDimensionMock is ERC721, AccessControl {
    bytes32 public ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public MOD_ROLE = keccak256("MOD_ROLE");
    using Strings for uint256;

    bytes32 private _whitelistMerkleRoot;

    mapping(address=>bool) private _whitelistClaimed;
    mapping(address => uint8) private _publicSaleClaimed;

    string private _baseUri;
    string private _tempUri;
    
    bool public revealed;
    bool private _overridePrivateSale;
    bool private _overridePublicSale;

    uint16 private constant _WHITELIST_LIMIT = 1;
    uint16 private constant _PUBLIC_LIMIT = 2;

    uint16[500] private _communityIds;
    uint16[55] private _teamIds;
    uint16 private _communityIndex;
    uint16 private _teamIndex;

    uint16 private _supplyTeamWallet; //pairs with _AIRDROP_LIMIT
    uint16 private _supplyCommunity; //pairs with _COLLECTION_SIZE - _AIRDROP_LIMIT

    uint64 public whitelistStart;
    uint64 public whitelistEnd;
    uint64 public publicStart;
    uint64 public publicEnd;

    constructor(
        uint64 _whitelistStart,
        uint64 _whitelistEnd,
        uint64 _publicStart,
        uint64 _publicEnd,
        bytes32 whitelistMerkleRoot,
        string memory name,
        string memory symbol,
        string memory tempUri
    )
        ERC721(name, symbol)
    {
        _whitelistMerkleRoot = whitelistMerkleRoot;
        _tempUri = tempUri;
        uint256 timestamp = block.timestamp;
        require(_whitelistStart > timestamp, "Wrong whitelist start");
        require(_whitelistEnd > timestamp && _whitelistEnd > whitelistStart, "Wrong whitelist end");
        whitelistStart = _whitelistStart;
        whitelistEnd = _whitelistEnd;
        require(_publicStart > timestamp && _publicStart >= _whitelistEnd, "Wrong public start");
        require(_publicEnd > timestamp && _publicEnd > _publicStart, "Wrong public end");
        publicStart = _publicStart; 
        publicEnd = _publicEnd; 
        address account = _msgSender();
        _setupRole(DEFAULT_ADMIN_ROLE, account);
        _setupRole(ADMIN_ROLE, account);
    }

    modifier onlyAdmin(){
        address account = _msgSender();
        require(hasRole(DEFAULT_ADMIN_ROLE, account) || hasRole(ADMIN_ROLE, account) , "Must be an admin");
        _;
    }

    /// @notice send more gas if you are minting a high quantity.
    function airdrop(address to, uint16 quantity) external onlyAdmin {
        _supplyTeamWallet += quantity;
        for(uint16 i = 0; i < quantity; i++) {
            _safeMint(to, pickRandomTeamUniqueId());
        }
    }

    function isWhitelistSaleActive() public view returns(bool){
        return _overridePrivateSale || (block.timestamp > whitelistStart && block.timestamp < whitelistEnd);
    }

    function isPublicSaleActive() public view returns(bool) {
        return _overridePublicSale || (block.timestamp > publicStart && block.timestamp < publicEnd);
    }

    /// @notice overrides public and private sale
    /// @param publicSale true if override public sale
    /// @param privateSale true if override private sale
    function overrideSales(bool publicSale, bool privateSale) external onlyAdmin {
        _overridePublicSale = publicSale;
        _overridePrivateSale = privateSale;
    }

    function toggleReveal() external onlyAdmin {
        revealed = !revealed;
    }

    function setBaseURI(string memory baseUri) external onlyAdmin {
        _baseUri = baseUri;
    }

    function setPlaceholderURI(string memory tempUri) external onlyAdmin {
        _tempUri = tempUri;
    }

    /// @dev override base uri. It will be combined with token ID
    function _baseURI() internal view override returns (string memory) {
        return _baseUri;
    }

    function _verifyList(bytes32[] calldata _merkleProof, bytes32 root, address addr) private pure returns(bool) {
        return (MerkleProof.verify(_merkleProof, root, keccak256(abi.encodePacked(addr))) == true);
    }

    function _verifyWhitelist(bytes32[] calldata _merkleProof, address addr) private view returns(bool) {
       return (MerkleProof.verify(_merkleProof, _whitelistMerkleRoot, keccak256(abi.encodePacked(addr))) == true);
    }
    
    /// @notice each address on the presale list may mint up to 1 tokens
    function whitelistMint(bytes32[] calldata _merkleProof) external {
        address account = _msgSender();
        require(isWhitelistSaleActive(), "PRESALE_INACTIVE");
        require(_verifyWhitelist(_merkleProof, account), "PRESALE_NOT_VERIFIED");
        require(!_whitelistClaimed[account], "WHITELIST_TOKEN_CLAIMED");
        _whitelistClaimed[account] = true;
        _supplyCommunity += 1;
        _safeMint(account, pickRandomCommunityUniqueId());
    }

    /// @notice may mint up to 5 tokens per transaction at the public sale price.
    function mint() external {
        require(isPublicSaleActive(), "PUBLIC_SALE_INACTIVE");
        address account = _msgSender();
        _publicSaleClaimed[account] += 1;
        require(_publicSaleClaimed[account] <= _PUBLIC_LIMIT, "PUBLIC_TOKEN_LIMIT");
        _supplyCommunity += 1;
        _safeMint(_msgSender(), pickRandomCommunityUniqueId());
    }

    function tokenURI(uint256 id) public view override returns (string memory) {
        require(_exists(id), "INVALID_ID");

        return revealed
            ? string(abi.encodePacked(_baseURI(), id.toString(), ".json"))
            : _tempUri;
    }

    event TokenId(uint256 tokenId);
    function pickRandomCommunityUniqueId() public returns (uint256 id) {
        uint256 random = uint256(keccak256(abi.encodePacked(_communityIndex, msg.sender, block.timestamp, blockhash(block.number-1))));
        uint256 len = _communityIds.length - _communityIndex;
        _communityIndex += 1;

        require(len > 0, 'no _communityIds left');
        uint256 randomIndex = random % len;
        id = _communityIds[randomIndex] != 0 ? _communityIds[randomIndex] : randomIndex;
        id += 1 + 55;
        _communityIds[randomIndex] = uint16(_communityIds[len - 1] == 0 ? len - 1 : _communityIds[len - 1]);
        _communityIds[len - 1] = 0;
        emit TokenId(id);
    }


    function pickRandomTeamUniqueId() public returns (uint256 id) {
        uint256 random = uint256(keccak256(abi.encodePacked(_teamIndex, msg.sender, block.timestamp, blockhash(block.number-1))));
        uint256 len = _teamIds.length - _teamIndex;
        _teamIndex += 1;
        require(len > 0, 'no _teamIds left');
        uint256 randomIndex = random % len;
        id = _teamIds[randomIndex] != 0 ? _teamIds[randomIndex] : randomIndex;
        id += 1;
        _teamIds[randomIndex] = uint16(_teamIds[len - 1] == 0 ? len - 1 : _teamIds[len - 1]);
        _teamIds[len - 1] = 0;
        emit TokenId(id);
    }

    function totalSupply() external view returns(uint16) {
        return _supplyTeamWallet + _supplyCommunity;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
