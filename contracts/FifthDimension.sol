/*
Crafted with love by
Fueled on Bacon
https://fueledonbacon.com
*/
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";



contract FifthDimension is ERC721, Ownable {
    using Strings for uint256;
    using Counters for Counters.Counter;

    uint256 private constant _COLLECTION_SIZE = 555;
    uint256 private constant _AIRDROP_LIMIT = 55;
    uint256 private constant _WHITELIST_LIMIT = 1;
    uint256 private constant _PUBLIC_LIMIT = 2;
    
    uint256 public revealed;
    uint256 private _overridePrivateSale;
    uint256 private _overridePublicSale;

    uint256 private _supplyTeamWallet; //pairs with _AIRDROP_LIMIT
    uint256 private _supplyCommunity; //pairs with _COLLECTION_SIZE - _AIRDROP_LIMIT

    uint256 public whitelistStart;
    uint256 public whitelistEnd;
    uint256 public publicStart;
    uint256 public publicEnd;

    string private _baseUri;
    string private _tempUri;

    bytes32 private _whitelistMerkleRoot;

    Counters.Counter private _tokenIds;

    mapping(address => uint256) private _whitelistClaimed;
    mapping(address => uint256) private _publicSaleClaimed;

    constructor(
        uint256 _whitelistStart,
        uint256 _whitelistEnd,
        uint256 _publicStart,
        uint256 _publicEnd,
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
    }

    /// @notice send more gas if you are minting a high quantity.
    function airdrop(address to, uint16 quantity) external onlyOwner {
        _supplyTeamWallet += quantity;
        require(_supplyTeamWallet <= _AIRDROP_LIMIT, "REACHED_AIRDROP_LIMIT");
        for(uint index = 0; index < quantity; index++) {
            _tokenIds.increment();
            uint id = _tokenIds.current();
            _safeMint(to, id);
        }
    }

    function isWhitelistSaleActive() public view returns(bool){
        return _overridePrivateSale == 1 || (block.timestamp > whitelistStart && block.timestamp < whitelistEnd);
    }

    function isPublicSaleActive() public view returns(bool) {
        return _overridePublicSale == 1 || (block.timestamp > publicStart && block.timestamp < publicEnd);
    }

    /// @notice overrides public and private sale
    /// @param publicSale true if override public sale
    /// @param privateSale true if override private sale
    function overrideSales(bool publicSale, bool privateSale) external onlyOwner {
        _overridePublicSale = publicSale ? 1 : 0;
        _overridePrivateSale = privateSale ? 1: 0;
    }

    function toggleReveal() external onlyOwner {
        revealed = revealed == 0 ? 1 : 0;
    }

    function setBaseURI(string memory baseUri) external onlyOwner {
        _baseUri = baseUri;
    }

    function setPlaceholderURI(string memory tempUri) external onlyOwner {
        _tempUri = tempUri;
    }

    /// @dev override base uri. It will be combined with token ID
    function _baseURI() internal view override returns (string memory) {
        return _baseUri;
    }

    function _verifyWhitelist(bytes32[] calldata _merkleProof, address addr) private view returns(bool) {
       return (MerkleProof.verify(_merkleProof, _whitelistMerkleRoot, keccak256(abi.encodePacked(addr))) == true);
    }
    
    /// @notice each address on the presale list may mint up to 1 tokens
    function whitelistMint(bytes32[] calldata _merkleProof) external {
        address account = _msgSender();
        require(isWhitelistSaleActive(), "PRESALE_INACTIVE");
        require(_verifyWhitelist(_merkleProof, account), "PRESALE_NOT_VERIFIED");
        require(_whitelistClaimed[account] == 0, "WHITELIST_TOKEN_CLAIMED");
        _whitelistClaimed[account] = 1;
        _mint(account);
    }

    /// @notice may mint up to 2 tokens per transaction at the public sale price.
    function mint() external {
        require(isPublicSaleActive(), "PUBLIC_SALE_INACTIVE");
        address account = _msgSender();
        _publicSaleClaimed[account] += 1;
        require(_publicSaleClaimed[account] <= _PUBLIC_LIMIT, "PUBLIC_TOKEN_LIMIT");
        _mint(account);
    }

    function _mint(address to) private {
        require(_supplyTeamWallet >= _AIRDROP_LIMIT, "AIRDROP_NOT_COMPLETED");
        _supplyCommunity += 1;
        require(_supplyCommunity <= _COLLECTION_SIZE - _AIRDROP_LIMIT, "REACHED_MAX_SUPPLY");
        _tokenIds.increment();
        uint id = _tokenIds.current();
        _safeMint(to, id);
    }

    function tokenURI(uint256 id) public view override returns (string memory) {
        require(_exists(id), "INVALID_ID");

        return revealed == 1
            ? string(abi.encodePacked(_baseURI(), id.toString(), ".json"))
            : _tempUri;
    }

   

    function totalSupply() external view returns(uint256) {
        return _supplyTeamWallet + _supplyCommunity;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
