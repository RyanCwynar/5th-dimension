
const { ethers } = require('hardhat');
const { MerkleTree } = require('merkletreejs');

module.exports = {
    merkleTree(accounts) {
        let data = [];
        for(let j = 0; j < accounts.length; j++) {
            data.push(hashData(accounts[j]))
        }
        return new MerkleTree(data, ethers.utils.keccak256, { sortPairs: true });
    }
}

const hashData = (account) => {
    return Buffer.from(ethers.utils.solidityKeccak256(['address'], [account]).slice(2), 'hex')
}