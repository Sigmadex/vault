// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  /*For production, delete this part from*/
  const SDEX = await hre.ethers.getContractFactory("SDEX");
  const sdex = await SDEX.deploy();

  await sdex.deployed();

  console.log("SDEX deployed to:", sdex.address);

  /*For production, to*/
  const VAULT = await hre.ethers.getContractFactory("Vault");
  const vault = await VAULT.deploy(9927, 730 , 1);

  await vault.deployed();

  console.log("VAULT deployed to:", vault.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
