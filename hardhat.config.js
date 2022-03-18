/**
 * @type import('hardhat/config').HardhatUserConfig
*/

require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
const INFURA_PROJECT_ID = "337d4f8bfef54a519652b6b43b613a72";
const fs = require("fs");
const PRIVATE_KEY = process.env.office_privatekey;

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      accounts: [`0x${PRIVATE_KEY}`],
    }
  }
};
