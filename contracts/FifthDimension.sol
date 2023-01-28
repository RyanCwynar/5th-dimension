/*
Crafted with love by
Fueled on Bacon
https://fueledonbacon.com
*/
//SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/access/Ownable.sol";

import "./TemplateNFT.sol";

contract FifthDimension is TemplateNFT, Ownable {

    constructor(
        address revenueRecipient,
        bytes32 _whitelistMerkleRoot,
        string memory tempUri
    ) TemplateNFT(revenueRecipient, _whitelistMerkleRoot, tempUri) {

    }

    function mint(address to, uint256 quantity) external onlyOwner {
        _safeMint(to, quantity);
    }

}