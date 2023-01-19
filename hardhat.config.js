require("@nomicfoundation/hardhat-toolbox");

ALCHEMY_API_KEY ="cZLQ6T_UkNmcundoizyIzS6VvDf7SNae";
PRIVATE_KEY="5c9957f472cbba03ad23f52684e688fc5becb76a3b44cdfd6d874bd91f222625";
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  // Our hardhat local network set up
  networks: {
      goerli: {
        url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
        accounts: [PRIVATE_KEY]
      },
  },
  // Path were our contract will be deployed
  paths:{
    artifacts:"./client/src/artifacts",
  }
}
