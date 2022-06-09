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

contract TemplateNFT is ERC721A, AccessControl {
    bytes32 public ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public MOD_ROLE = keccak256("MOD_ROLE");
    using Strings for uint256;

    address private immutable _revenueRecipient;
    
    bytes32 public whitelistMerkleRoot;

    mapping(address=>uint) private _whitelistClaimed;

    string private _baseUri;
    string private _tempUri;
    
    bool public listsFinalized    = false;
    bool public metadataFinalized = false;
    bool public timesFinalized    = false;
    bool public airdropped        = false;
    bool public revealed          = false;

    bool private _overrideWhitelist = false;
    bool private _overridePublic  = false;

    uint public constant AIRDROP_LIMIT   = 100;

    uint public collectionSize = 1000;
    uint public whitelistLimit = 3;
    uint public publicLimit    = 20;
    uint public whitelistPrice = 0.07 ether;
    uint public publicPrice    = 0.1 ether;

    uint public whitelistStart;
    uint public whitelistEnd;
    uint public publicStart;
    uint public publicEnd;

    constructor(
        address revenueRecipient,
        bytes32 _whitelistMerkleRoot,
        string memory tempUri
    )
        ERC721A("TemplateNFT", "TFT")
    {
        _revenueRecipient  = revenueRecipient;
        whitelistMerkleRoot = _whitelistMerkleRoot;
        _tempUri = tempUri;
        whitelistStart = block.timestamp + 30 minutes;  // starts 30 minutes after contract launch
        whitelistEnd = whitelistStart + 4 hours; // ends 4 hours after it starts
        publicStart = whitelistEnd; // starts when whitelist sale ends
        publicEnd = publicStart + 4 hours; // ends 4 hours after it starts
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(ADMIN_ROLE, msg.sender);
    }

    function grantAdminRole(address addr) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _grantRole(ADMIN_ROLE, addr);
    }

    function grantModRole(address addr) external onlyAdmin {
        _grantRole(MOD_ROLE, addr);
    }

    function revokeAdminRole(address addr) external onlyRole(DEFAULT_ADMIN_ROLE) {
        _revokeRole(ADMIN_ROLE, addr);
    }

    function revokeModRole(address addr) external onlyAdmin {
        _revokeRole(MOD_ROLE, addr);
    }

    function senderIsAdmin() external view returns(bool){
        return hasRole(ADMIN_ROLE, msg.sender) || hasRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    function senderIsMod() external view returns(bool){
        return hasRole(MOD_ROLE, msg.sender);
    }

    modifier onlyModOrHigher(){
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender) || hasRole(ADMIN_ROLE, msg.sender) || hasRole(MOD_ROLE, msg.sender), "Must be a mod or higher");
        _;
    }

    modifier onlyAdmin(){
        require(hasRole(DEFAULT_ADMIN_ROLE, msg.sender) || hasRole(ADMIN_ROLE, msg.sender) , "Must be an admin");
        _;
    }

    /// @notice the initial 100 tokens will be minted to the team vault for use in giveaways and collaborations.
    function airdrop(address to, uint quantity) external onlyAdmin {
        require(airdropped == false, "ALREADY_AIRDROPPED");
        require(quantity <= AIRDROP_LIMIT, "EXCEEDS_AIRDROP_LIMIT");
        airdropped = true;
        _safeMint(to, quantity);
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
        uint _whitelistStartTime,
        uint _whitelistEndTime
    ) onlyAdmin external {
        require(timesFinalized == false, "TIMES_FINALIZED");
        whitelistStart = _whitelistStartTime;
        whitelistEnd   = _whitelistEndTime;
    }

    function setPublicSaleTimes(
        uint _publicStartTime,
        uint _publicEndTime
    ) external onlyAdmin {
        require(timesFinalized == false, "TIMES_FINALIZED");
        publicStart = _publicStartTime;
        publicEnd = _publicEndTime;
    }

    function reduceCollectionSize(uint _collectionSize) external onlyAdmin {
        require(_collectionSize < collectionSize, "REDUCE_SIZE_ONLY");
        require(_collectionSize >= totalSupply(), "MAINTAIN_EXISTING_SUPPLY");
        collectionSize = _collectionSize;
    }

    function setPublicLimit(uint _publicLimit) external onlyAdmin {
        publicLimit = _publicLimit;
    }

    function setWhitelistLimit(uint _whitelistLimit) external onlyAdmin {
        whitelistLimit = _whitelistLimit;
    }

    function setPublicPrice(uint _price) external onlyAdmin {
        publicPrice = _price;
    }

    function setWhitelistPrice(uint _price) external onlyAdmin {
        whitelistPrice = _price;
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

    /// @notice Withdraw's contract's balance to the withdrawal address
    function withdraw() external {
        uint256 balance = address(this).balance;
        require(balance > 0, "NO_BALANCE");

        (bool success, ) = payable(_revenueRecipient).call{ value: balance }("");
        require(success, "WITHDRAW_FAILED");
    }

    function _verifyList(bytes32[] calldata _merkleProof, bytes32 root, address addr) internal pure returns(bool) {
        return (MerkleProof.verify(_merkleProof, root, keccak256(abi.encodePacked(addr))) == true);
    }

    function verifyWhitelist(bytes32[] calldata _merkleProof, address addr) public view returns(bool) {
       return _verifyList(_merkleProof, whitelistMerkleRoot, addr);
    }
    
    /// @notice each address on the presale list may mint up to 3 tokens at the presale price
    function whitelistMint(bytes32[] calldata _merkleProof, uint quantity) external payable {
        require(isWhitelistSaleActive(), "PRESALE_INACTIVE");
        require(verifyWhitelist(_merkleProof, msg.sender), "PRESALE_NOT_VERIFIED");
        require(totalSupply() + quantity <= collectionSize, "EXCEEDS_COLLECTION_SIZE");
        require(_whitelistClaimed[msg.sender] + quantity <= whitelistLimit, "WHITELIST_TOKEN_LIMIT");
        uint cost = quantity * whitelistPrice;
        require(msg.value >= cost, "VALUE_TOO_LOW");
        _whitelistClaimed[msg.sender] += quantity;

        _safeMint(msg.sender, quantity);
    }

    /// @notice may mint up to 5 tokens per transaction at the public sale price.
    function mint(uint quantity) external payable {
        require(isPublicSaleActive(), "PUBLIC_SALE_INACTIVE");
        require(quantity <= publicLimit, "PUBLIC_TOKEN_LIMIT");
        require(totalSupply() + quantity <= collectionSize, "EXCEEDS_COLLECTION_SIZE");
        uint cost;
        cost = quantity * publicPrice;
        require(msg.value >= cost, "VALUE_TOO_LOW");

        _safeMint(msg.sender, quantity);
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
