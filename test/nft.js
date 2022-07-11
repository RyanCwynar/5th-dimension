const chai = require("chai");
const { expect } = require("chai");
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const { utils } = require("ethers");
const { ethers, waffle } = require("hardhat");
const { default: MerkleTree } = require("merkletreejs");
const { getLatestTimestamp, timeIncreaseTo } = require("../scripts/time");

const provider = waffle.provider;


describe('CyberlionzMerger', function () {

  const WHITELIST = '0x0000000000000000000000000000000000000000000000000000000000000000'
  const ADMIN_ROLE = '0x0000000000000000000000000000000000000000000000000000000000000000'
 
  let signers
  let nft
  let timestamp;
  let whitelistStart;
  let whitelistEnd;
  let publicStart;
  let publicEnd;
  let merkleRoot;


  before(async function() {
    signers = await ethers.getSigners();

    console.log((await provider.getBlock("latest")).timestamp)
    timestamp = (await getLatestTimestamp()).toNumber()
    whitelistStart = timestamp + 60*5 //starts in 5 minutes
    whitelistEnd = whitelistStart + 60*5; //lasts 5 minutes
    publicStart = whitelistEnd + 60; //one minute after whitelisEnd
    publicEnd = publicStart + 60*5; //lasts 5 minutes
    merkleRoot = merkleTree(signers);
    console.log("timestamp", timestamp)
    console.log("whitelistStart", whitelistStart)
    console.log("whitelistEnd", whitelistEnd)
    console.log("publicStart", publicStart)
    console.log("publicEnd", publicEnd)
    timestamp = (await getLatestTimestamp()).toNumber()
    console.log("timestamp", timestamp)
  });

  beforeEach(async function() {
    const NFT = await ethers.getContractFactory("FifthDimensionMock");

    nft = await NFT.deploy(
        whitelistStart,
        whitelistEnd,
        publicStart,
        publicEnd,
        merkleRoot.getHexRoot(),
        "5th Dimension",
        "5TH",
        "www.tempuri.com"
    );
    await nft.deployed()
  });


  it('Test randomness', async function () {

    const gas = []

    const arr = []
    await Promise.all((new Array(555).fill(0)).map(async a => {

        try {
            let tx = await nft.pickRandomUniqueId(parseInt(Math.random() * (1000 - 1) + 1), { gasLimit: "80000"});
            tx = await tx.wait()
    
            const tokenId = tx.events[0].args[0].toNumber();
            expect(arr).not.to.be.containing(tokenId);
    
            arr.push(tokenId)
            gas.push(tx.gasUsed.toNumber())
        } catch(e) {
            console.log(e)
        }
        
    }))

    console.log(arr.length)
    console.log(gas)


  }).timeout(100000);;


});


function merkleTree(signers) {
    //tokens 10, 20, 30, 40, 50
    let tokenPrimaMateriaIds = [];
    for(let j = 1; j <= 10; j++) {
        tokenPrimaMateriaIds.push(hashData(signers[j].address))
    }
    return new MerkleTree(tokenPrimaMateriaIds, utils.keccak256, { sortPairs: true });
} 

const getProof = (merkleTree, tokenId) => {
    return merkleTree.getHexProof(hashData(tokenId));
}

const hashData = (tokenId) => {
    return Buffer.from(ethers.utils.solidityKeccak256(['uint256'], [tokenId]).slice(2), 'hex')
}