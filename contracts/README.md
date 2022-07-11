# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```


### Deploy to network: 
npx hardhat run --network rinkeby ../scripts/deploy.js

### Hardhat verify
npx hardhat verify 0x14c5b741E065903337C6EEC012fc58981221B030 --network rinkeby --constructor-args ./scripts/arguments.js

## Rinkeby
0x14c5b741E065903337C6EEC012fc58981221B030

npx hardhat node --fork https://eth-rinkeby.alchemyapi.io/v2/LK-NXLiAU5BBph3fh2JKcG4gFzXVCqw7 --fork-block-number 10774232