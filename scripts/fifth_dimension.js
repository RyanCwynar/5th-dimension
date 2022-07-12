const { ethers } = require('hardhat');
const { merkleTree } = require('./merkletree');
require('dotenv').config({path:__dirname+'/.env'});

const whitelist = [
  "0x05db46B2588ebB55B4525b5d6103F41a776f9ec2"
]

const merkleRoot = merkleTree(whitelist);

  module.exports = [
    1657662736, //whitelistStart Tuesday, July 12, 2022 4:52:16 PM GMT-05:00
    1657749136, //whitelistEnd Wednesday, July 13, 2022 4:52:16 PM GMT-05:00
    1657752736, //publicStart Wednesday, July 13, 2022 5:52:16 PM GMT-05:00
    1657839136, //publicEnd Thursday, July 14, 2022 5:52:16 PM GMT-05:00
    merkleRoot.getHexRoot(), //whitelist
    "5th Dimension", //name
    "5TH", //symbol
    "www.tempuri.com/" //tempuri
  ];