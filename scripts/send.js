// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  sdexadd = "0xdFFD3105101b9d244792d266Dd67bfd4fF97A5a0";
  vaultadd = "0xed02b03A168fF94B7b59FD840D9fa0c85750Fdf2";
  const Vault = await hre.ethers.getContractFactory("Vault");
  const vault = await Vault.attach(vaultadd);
  await vault.setTkn(sdexadd);
  await vault.setOwner("0x9569c3ca25C5cb45Fa3eabe4A1f4b94f527a9Fd6"); // this is my test wallet (set owner of vault)


  const SDEX = await hre.ethers.getContractFactory("SDEX");
  const sdex = await SDEX.attach(sdexadd);
  await sdex.transfer(vaultadd,"100000000000000000000000");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
