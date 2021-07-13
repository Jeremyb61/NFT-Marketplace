require("@nomiclabs/hardhat-waffle");

const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim() || "01234567890123456789";

module.exports = {
  defaultNetwork: "hardhart",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.6", 
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
