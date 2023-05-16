const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

  const cryptoDevTokenContract = await ethers.getContractFactory(
    "CryptoDevToken"
  );
  // deploy the contract
  const deployedCryptoDevsTokenContract = await cryptoDevTokenContract.deploy(
    cryptoDevsNFTContract
  );
  await deployedCryptoDevsTokenContract.deployed();
  // print the address of the deployed contract
  console.log(
    "Crypto Devs Token Contract Address: ",
    deployedCryptoDevsTokenContract
  );
}
// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
