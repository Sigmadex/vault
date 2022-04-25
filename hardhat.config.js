const path = require('path');
const envPath = path.join(__dirname, '.env');
require('dotenv').config({ path: envPath });

require("@nomiclabs/hardhat-waffle");
//require("@nomiclabs/hardhat-truffle5");
//require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
	const accounts = await ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	networks: {
		rinkeby: { //chainID = 4
			url: `${process.env.RINKEBY_URL}`,
			accounts: [process.env.DEPLOYER_PRIVATE_KEY]
		},
		avalanche: { //chainID = 43114
			url: `${process.env.AVALANCHE_URL}`,
			accounts: [process.env.DEPLOYER_PRIVATE_KEY]
		},
		avalancheFujiTestnet: { //chainID = 43113
			url: `${process.env.AVALANCHE_TEST_URL}`,
			accounts: [process.env.DEPLOYER_PRIVATE_KEY]
		}
	},
	solidity: {
		compilers: [
			{
				version: "0.8.11",
			},
			{
				version: "0.6.12",
			}
		],
	},
	etherscan: {
		apiKey: {
			//ethereum
			rinkeby: process.env.ETHERSCAN_API_KEY,
			// avalanche
			avalanche: process.env.SNOWTRACE_API_KEY,
			avalancheFujiTestnet: process.env.SNOWTRACE_API_KEY,
		}
	},
};

