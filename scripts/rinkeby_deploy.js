require('dotenv').config({path:__dirname+'/.env'});

async function main() {

  const {
    REVENUE_RECIPIENT,
    WHITELIST,
    URI
  } = process.env

  
  const Contract = await ethers.getContractFactory("FifthDimension");

  //With address 0
  const contract = await Contract.deploy(
      REVENUE_RECIPIENT, 
      WHITELIST, 
      URI,
      { gasLimit: 7000000 }
  )
  await contract.deployed();

  console.log("Contract deployed to address:", contract.address)
}
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
  