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
    whitelistStart = timestamp + 60*60 //starts in 60 minutes
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


  it('Test team randomness', async function () {

    let teamArray = []
    await Promise.all((new Array(55).fill(0)).map(async a => {
        try {
            let tx = await nft.pickRandomTeamUniqueId({ gasLimit: "70000"});
            tx = await tx.wait()
            const tokenId = tx.events[0].args[0].toNumber();
            expect(teamArray).not.to.be.containing(tokenId);
            teamArray.push(tokenId)
        } catch(e) {
            console.log(e)
        }
    }))
    expect(teamArray.length).to.be.equal(55)
    expect(teamArray).not.to.be.containing(56);
    teamArray = teamArray.sort((a, b) => a-b);
    expect(teamArray[0]).to.be.equal(1)
    expect(teamArray[54]).to.be.equal(55)

  }).timeout(100000);

  it('Test community randomness', async function () {

    let communityArray = []
    await Promise.all((new Array(500).fill(0)).map(async a => {
        try {
            let tx = await nft.pickRandomCommunityUniqueId({ gasLimit: "70000"});
            tx = await tx.wait()
            const tokenId = tx.events[0].args[0].toNumber();
            expect(communityArray).not.to.be.containing(tokenId);
            communityArray.push(tokenId)
        } catch(e) {
            console.log(e)
        }
        
    }))
    expect(communityArray.length).to.be.equal(500)
    expect(communityArray).not.to.be.containing(55);
    communityArray = communityArray.sort((a, b) => a-b);
    expect(communityArray[0]).to.be.equal(56)
    expect(communityArray[499]).to.be.equal(555)

  }).timeout(100000);


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