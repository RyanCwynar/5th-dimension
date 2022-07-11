/*
Crafted with love by
Fueled on Bacon
https://fueledonbacon.com
*/
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./ERC721A.sol";

contract FifthDimension is ERC721A, AccessControl {
    bytes32 public ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public MOD_ROLE = keccak256("MOD_ROLE");
    using Strings for uint256;

    bytes32 public whitelistMerkleRoot;

    mapping(address=>bool) private _whitelistClaimed;

    string private _baseUri;
    string private _tempUri;
    
    bool public listsFinalized;
    bool public metadataFinalized;
    bool public timesFinalized;
    bool public revealed;
    bool private airdropped;

    bool private _overrideWhitelist;
    bool private _overridePublic;

    uint public constant AIRDROP_LIMIT = 55;

    uint private constant _COLLECTION_SIZE = 555;
    uint private constant _WHITELIST_LIMIT = 1;
    uint private constant _PUBLIC_LIMIT = 2;

    uint64 public whitelistStart;
    uint64 public whitelistEnd;
    uint64 public publicStart;
    uint64 public publicEnd;

    constructor(
        uint64 _whitelistStart,
        uint64 _whitelistEnd,
        uint64 _publicStart,
        uint64 _publicEnd,
        bytes32 _whitelistMerkleRoot,
        string memory name,
        string memory symbol,
        string memory tempUri
    )
        ERC721A(name, symbol)
    {
        whitelistMerkleRoot = _whitelistMerkleRoot;
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

    function senderIsAdmin() external view returns(bool){
        address account = _msgSender();
        return hasRole(ADMIN_ROLE, account) || hasRole(DEFAULT_ADMIN_ROLE, account);
    }

    function senderIsMod() external view returns(bool){
        return hasRole(MOD_ROLE, _msgSender());
    }

    modifier onlyAdmin(){
        address account = _msgSender();
        require(hasRole(DEFAULT_ADMIN_ROLE, account) || hasRole(ADMIN_ROLE, account) , "Must be an admin");
        _;
    }

    /// @notice the initial 55 tokens will be minted to the team vault for use in giveaways and collaborations.
    function airdrop(address to) external onlyAdmin {
        require(airdropped == false, "ALREADY_AIRDROPPED");
        airdropped = true;
        _safeMint(to, AIRDROP_LIMIT);
    }

    function isWhitelistSaleActive() public view returns(bool){
        if(_overrideWhitelist){
            return true;
        }
        return block.timestamp > whitelistStart && block.timestamp < whitelistEnd;
    }

    function isPublicSaleActive() public view returns(bool) {
        if(_overridePublic){
            return true;
        }
        return block.timestamp > publicStart && block.timestamp < publicEnd;
    }

    function setWhitelistMerkleRoot(bytes32 root) external onlyAdmin {
        require(listsFinalized == false, "LIST_FINALIZED");
        whitelistMerkleRoot = root;
    }

    function setWhitelistTimes(
        uint64 _whitelistStartTime,
        uint64 _whitelistEndTime
    ) onlyAdmin external {
        require(timesFinalized == false, "TIMES_FINALIZED");
        whitelistStart = _whitelistStartTime;
        whitelistEnd   = _whitelistEndTime;
    }

    function setPublicSaleTimes(
        uint64 _publicStartTime,
        uint64 _publicEndTime
    ) external onlyAdmin {
        require(timesFinalized == false, "TIMES_FINALIZED");
        publicStart = _publicStartTime;
        publicEnd = _publicEndTime;
    }

    function toggleReveal() external onlyAdmin {
        require(metadataFinalized == false, "METADATA_FINALIZED");
        revealed = !revealed;
    }

    function toggleWhitelistSale() external onlyAdmin {
        require(timesFinalized == false, "TIMES_FINALIZED");
        _overrideWhitelist = !_overrideWhitelist;
    }

    function togglePublic() external onlyAdmin {
        require(timesFinalized == false, "TIMES_FINALIZED");
        _overridePublic = !_overridePublic;
    }

    function finalizeMetadata() external onlyAdmin {
        require(metadataFinalized == false, "METADATA_FINALIZED");
        metadataFinalized = true;
    }

    function finalizeTimes() external onlyAdmin {
        require(timesFinalized == false, "TIMES_FINALIZED");
        timesFinalized = true;
    }

    function finalizeLists() external onlyAdmin {
        require(listsFinalized == false, "LIST_FINALIZED");
        listsFinalized = true;
    }
    
    function setBaseURI(string memory baseUri) external onlyAdmin {
        require(metadataFinalized == false, "METADATA_FINALIZED");
        _baseUri = baseUri;
    }

    function setPlaceholderURI(string memory tempUri) external onlyAdmin {
        require(metadataFinalized == false, "METADATA_FINALIZED");
        _tempUri = tempUri;
    }

    /// @dev override base uri. It will be combined with token ID
    function _baseURI() internal view override returns (string memory) {
        return _baseUri;
    }

    function _verifyList(bytes32[] calldata _merkleProof, bytes32 root, address addr) internal pure returns(bool) {
        return (MerkleProof.verify(_merkleProof, root, keccak256(abi.encodePacked(addr))) == true);
    }

    function verifyWhitelist(bytes32[] calldata _merkleProof, address addr) public view returns(bool) {
       return _verifyList(_merkleProof, whitelistMerkleRoot, addr);
    }
    
    /// @notice each address on the presale list may mint up to 1 tokens
    function whitelistMint(bytes32[] calldata _merkleProof) external {
        address account = _msgSender();
        require(isWhitelistSaleActive(), "PRESALE_INACTIVE");
        require(verifyWhitelist(_merkleProof, account), "PRESALE_NOT_VERIFIED");
        require(totalSupply() + 1 <= _COLLECTION_SIZE, "EXCEEDS_COLLECTION_SIZE");
        require(_whitelistClaimed[account], "WHITELIST_TOKEN_LIMIT");
        _whitelistClaimed[account] = true;
        _safeMint(account, 1);
    }

    /// @notice may mint up to 5 tokens per transaction at the public sale price.
    function mint(uint quantity) external payable {
        require(isPublicSaleActive(), "PUBLIC_SALE_INACTIVE");
        require(quantity <= _PUBLIC_LIMIT, "PUBLIC_TOKEN_LIMIT");
        require(totalSupply() + quantity <= _COLLECTION_SIZE, "EXCEEDS_COLLECTION_SIZE");
        _safeMint(_msgSender(), quantity);
    }

    function tokenURI(uint256 id) public view override returns (string memory) {
        require(_exists(id), "INVALID_ID");

        return revealed
            ? string(abi.encodePacked(_baseURI(), id.toString(), ".json"))
            : _tempUri;
    }

    function supportsInterface(bytes4 interfaceId) public view virtual override(ERC721A, AccessControl) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
