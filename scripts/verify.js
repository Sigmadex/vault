// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  contractAddress = "0xF63420f40d47A4f27B775512635994C35082a6A5";
  // We get the contract to deploy
  await hre.run("verify:verify", {
    address: contractAddress,
    constructorArguments: [
      8,
      10,
      20
    ],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
