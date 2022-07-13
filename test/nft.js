const chai = require("chai");
const { expect } = require("chai");
const assertArrays = require('chai-arrays');
chai.use(assertArrays);
const { utils } = require("ethers");
const { ethers, waffle } = require("hardhat");
const { default: MerkleTree } = require("merkletreejs");
const { getLatestTimestamp, timeIncreaseTo } = require("../scripts/time");

const provider = waffle.provider;


describe('5th Dimension', function () {

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

    
  });

  beforeEach(async function() {

    timestamp = (await getLatestTimestamp()).toNumber()
    whitelistStart = timestamp + 60*60 //starts in 60 minutes
    whitelistEnd = whitelistStart + 60*5; //lasts 5 minutes
    publicStart = whitelistEnd + 60; //one minute after whitelisEnd
    publicEnd = publicStart + 60*5; //lasts 5 minutes
    merkleRoot = merkleTree(signers);
    timestamp = (await getLatestTimestamp()).toNumber()


    const NFT = await ethers.getContractFactory("FifthDimensionMock");

    nft = await NFT.deploy(
        whitelistStart,
        whitelistEnd,
        publicStart,
        publicEnd,
        merkleRoot.getHexRoot(),
        "5th Dimension",
        "5TH",
        "www.tempuri.com/"
    );
    await nft.deployed()
  });


  it('Test team randomness', async function () {

    let teamArray = []
    await Promise.all((new Array(55).fill(0)).map(async a => {
        try {
            let tx = await nft.pickRandomTeamUniqueId({ gasLimit: "100000"});
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

    //tries to pick another random
    await expect(
        nft.pickRandomTeamUniqueId({ gasLimit: "100000"})
    ).to.be.revertedWith('no _teamIds left');


  }).timeout(100000);

  it('Test community randomness', async function () {

    let communityArray = []
    await Promise.all((new Array(500).fill(0)).map(async a => {
        try {
            let tx = await nft.pickRandomCommunityUniqueId({ gasLimit: "100000"});
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

    //tries to pick another random
    await expect(
        nft.pickRandomCommunityUniqueId({ gasLimit: "100000"})
    ).to.be.revertedWith('no _communityIds left');

  }).timeout(100000);

  it('Test airdrop', async function () {

    let minted = []
    //airdrop 5 for 5 team members = 25
    await Promise.all(new Array(5).fill(0).map(async (a, i) => {
        let tx = await nft.airdrop(signers[i+1].address, 5, {gasLimit: "400000"});
        tx = await tx.wait()
        const tokens = tx.events.filter(e => e.event === "Transfer").map(e => e.args[2].toNumber())
        expect(tokens.length).to.be.equal(5)
        minted = [...minted, ...tokens]
        if(i == 0) console.log("airdrop 5 tokens", tx.gasUsed.toNumber())
    }))
    expect(minted.length).to.be.equal(25)

    //airdrop 30 for marketing
    let tx = await nft.airdrop(signers[9].address, 30, {gasLimit: "1400000"});
    tx = await tx.wait()
    console.log("airdrop 30 tokens", tx.gasUsed.toNumber())
    const tokens = tx.events.filter(e => e.event === "Transfer").map(e => e.args[2].toNumber())
    expect(tokens.length).to.be.equal(30)
    minted = [...minted, ...tokens]
    console.log("Gas Used to airdrop 30 tokens", tx.gasUsed.toNumber())

    const supply = await nft.totalSupply()
    expect(supply).to.be.equal(55);
    console.log("Airdrop tokens minted");

    const orderedArray = [];
    for(let j  = 1 ; j <= 55; j++) {
        orderedArray.push(j)
    }
    expect(minted.sort((a, b) => a -b)).to.be.equalTo(orderedArray);    

    //tries to airdrop more
    await expect(
        nft.airdrop(signers[8].address, 1)
    ).to.be.revertedWith('no _teamIds left');
    
  })

  it("Test whitelist mint", async function() {
    //tries to mint where whitelist no started
    await expect(
        nft.connect(signers[1]).whitelistMint(getProof(merkleRoot, signers[1].address))
    ).to.be.revertedWith('PRESALE_INACTIVE');

    await timeIncreaseTo(timestamp + 60*61)

    //tries to mint with wrong merkleroot
    await expect(
        nft.connect(signers[2]).whitelistMint(getProof(merkleRoot, signers[1].address))
    ).to.be.revertedWith('PRESALE_NOT_VERIFIED');

    let minted = []
    let tx = await nft.connect(signers[1]).whitelistMint(getProof(merkleRoot, signers[1].address))
    tx = await tx.wait()
    let tokens = tx.events.filter(e => e.event === "Transfer").map(e => e.args[2].toNumber())
    minted = [...minted, ...tokens]
    tx = await nft.connect(signers[2]).whitelistMint(getProof(merkleRoot, signers[2].address))
    tx = await tx.wait()
    tokens = tx.events.filter(e => e.event === "Transfer").map(e => e.args[2].toNumber())
    minted = [...minted, ...tokens]
    tx = await nft.connect(signers[3]).whitelistMint(getProof(merkleRoot, signers[3].address))
    tx = await tx.wait()
    tokens = tx.events.filter(e => e.event === "Transfer").map(e => e.args[2].toNumber())
    minted = [...minted, ...tokens]
    tx = await nft.connect(signers[4]).whitelistMint(getProof(merkleRoot, signers[4].address))
    tx = await tx.wait()
    tokens = tx.events.filter(e => e.event === "Transfer").map(e => e.args[2].toNumber())
    minted = [...minted, ...tokens]
    tx = await nft.connect(signers[5]).whitelistMint(getProof(merkleRoot, signers[5].address))
    tx = await tx.wait()
    tokens = tx.events.filter(e => e.event === "Transfer").map(e => e.args[2].toNumber())
    minted = [...minted, ...tokens]
    tx = await nft.connect(signers[6]).whitelistMint(getProof(merkleRoot, signers[6].address))
    tx = await tx.wait()
    console.log("whitelist mint", tx.gasUsed.toNumber())
    tokens = tx.events.filter(e => e.event === "Transfer").map(e => e.args[2].toNumber())
    minted = [...minted, ...tokens]
    expect(minted.length).to.be.equal(6);
    minted.map(m => {
        expect(m).to.be.greaterThan(55)
    })
    expect(await nft.totalSupply()).to.be.equal(6)

     //tries to claim again
     await expect(
        nft.connect(signers[1]).whitelistMint(getProof(merkleRoot, signers[1].address))
    ).to.be.revertedWith('WHITELIST_TOKEN_CLAIMED');

    await timeIncreaseTo(whitelistStart + 60*6)

    //tries to mint where whitelist ended
    await expect(
        nft.connect(signers[1]).whitelistMint(getProof(merkleRoot, signers[1].address))
    ).to.be.revertedWith('PRESALE_INACTIVE');

    //override private sale
    tx = await nft.overrideSales(false, true);
    tx = await tx.wait()
    await nft.connect(signers[7]).whitelistMint(getProof(merkleRoot, signers[7].address))
    minted = [...minted, ...tokens]
    expect(minted.length).to.be.equal(7);
    minted.map(m => {
        expect(m).to.be.greaterThan(55)
    })
    expect(await nft.totalSupply()).to.be.equal(7)



  })

  it("Test public mint", async function() {
    await timeIncreaseTo(timestamp + 60*61)

    //tries to mint where public sale is not yet started
    await expect(
        nft.connect(signers[2]).mint()
    ).to.be.revertedWith('PUBLIC_SALE_INACTIVE');

    await timeIncreaseTo(publicStart + 60)

    let minted = []
    await Promise.all(new Array(20).fill(0).map(async (a, i)=> {
        let tx = await nft.connect(signers[i]).mint({gasLimit: "200000"})
        tx = await tx.wait()
        let tokens = tx.events.filter(e => e.event === "Transfer").map(e => e.args[2].toNumber())
        minted = [...minted, ...tokens]
    }))
    expect(minted.length).to.be.equal(20);
    minted.map(m => {
        expect(m).to.be.greaterThan(55)
    })
    expect(await nft.totalSupply()).to.be.equal(20)

    let tx = await nft.connect(signers[1]).mint({gasLimit: "200000"})
    tx = await tx.wait()
    console.log("public mint", tx.gasUsed.toNumber())
    let tokens = tx.events.filter(e => e.event === "Transfer").map(e => e.args[2].toNumber())
    minted = [...minted, ...tokens]

    expect(await nft.totalSupply()).to.be.equal(21)

    //tries to mint more than 2
    await expect(
        nft.connect(signers[1]).mint({gasLimit: "200000"})
    ).to.be.revertedWith('PUBLIC_TOKEN_LIMIT');

    //tries to mint where public sale ended
    await timeIncreaseTo(publicEnd + 60)
    await expect(
        nft.connect(signers[1]).mint({gasLimit: "200000"})
    ).to.be.revertedWith('PUBLIC_SALE_INACTIVE');

    //override public sale
    tx = await nft.overrideSales(true, false);
    tx = await tx.wait()
    await nft.connect(signers[7]).mint()
    minted = [...minted, ...tokens]
    expect(minted.length).to.be.equal(22);
    minted.map(m => {
        expect(m).to.be.greaterThan(55)
    })
    expect(await nft.totalSupply()).to.be.equal(22)

  })

  it("Test URI reveal", async function() {
    await timeIncreaseTo(publicStart + 60)

    let tx = await nft.connect(signers[1]).mint({gasLimit: "200000"})
    tx = await tx.wait()
    const token = tx.events.filter(e => e.event === "Transfer").map(e => e.args[2].toNumber())[0]
    const tempUri = await nft.tokenURI(token);
    expect(tempUri).to.be.equal("www.tempuri.com/")

    await nft.setBaseURI("www.baseuri.com/");
    await nft.toggleReveal();
    const baseUri = await nft.tokenURI(token);
    expect(baseUri).to.be.equal(`www.baseuri.com/${token}.json`)

  })

});


function merkleTree(signers) {
    let accounts = [];
    for(let j = 1; j <= 10; j++) {
        accounts.push(hashData(signers[j].address))
    }
    return new MerkleTree(accounts, utils.keccak256, { sortPairs: true });
} 

const getProof = (merkleTree, account) => {
    return merkleTree.getHexProof(hashData(account));
}

const hashData = (account) => {
    return Buffer.from(ethers.utils.solidityKeccak256(['address'], [account]).slice(2), 'hex')
}