const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

  const cryptoDevTokenContract = await ethers.getContractFactory(
    "CryptoDevToken"
  );
  // deploy the contract
  const deployedCryptoDevTokenContract = await cryptoDevTokenContract.deploy(
    cryptoDevsNFTContract
  );
  await deployedCryptoDevTokenContract.deployed();
  // print the address of the deployed contract
  console.log(
    "Crypto Dev Token Contract Address: ",
    deployedCryptoDevTokenContract
  );
}
// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
