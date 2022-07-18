const { ethers } = require('hardhat');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const args = require("./ps_fifth_dimension")
const path = "./scripts/ps_fifth_dimension.js";

async function main() {

  const Contract = await ethers.getContractFactory("FifthDimensionPS");
  const contract = await Contract.deploy(...args)
  await contract.deployed();
  console.log("Fifth Dimension contract deployed to address:", contract.address)

  console.log("Waiting for one minute for contract propagation")
  await new Promise(r => setTimeout(r, 60000));
  await verify(contract.address, "rinkeby", path)
}

async function verify(address, network, path) {
  console.log("Start contract verification")
  try {
    const { stdout, stderr } = await exec(`npx hardhat verify --contract contracts/FifthDimensionPS.sol:FifthDimensionPS  ${address} --network ${network} --constructor-args ${path} `);
    if(stderr) return console.log('stderr:', stderr);
    console.log('stdout:', stdout);
  } catch (e) {
    console.error(e); // should contain code (exit code) and signal (that caused the termination).
  }
}
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  