const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");

let owner, addr1, addr2;
let SDEX;
let sdex;
let VAULT;
let vault;
let auth;


describe("Deploying a Vault Contract and test their functionalities ", function () {
    it("Deploy SDEX Token Contract & Vault Contract, transfer 10000 to vault Contract", async () => {
        [owner, addr1, addr2] = await ethers.getSigners();
        console.log("\n");
        console.log("OWNER:", owner.address);

        SDEX = await ethers.getContractFactory('SDEX');
        sdex = await SDEX.deploy();
        console.log("SDEX TOKEN", sdex.address);
        console.log("~~~~~~~~~~~~DEPLOY VAULT Contract~~~~~~~~~~~~~~~~~~~")
    
        VAULT = await ethers.getContractFactory('Vault');
        const temp_addr = "0xbb663a09ff63f77f462c990f055b04eeaf46e665";
        // deploy bank factory
        vault = await VAULT.deploy(9927, 730 , 1);
        auth = await vault.auth();
        console.log("VAULT Contract Address:", vault.address);
        console.log("VAULT AUTH Address:", auth);
        console.log("~~~~~~~~~~~~TRANSFER SDEX TO VAULT~~~~~~~~~~~~~~~~~~~")
    
        await sdex.transfer(vault.address, 100000000);
        expect(await sdex.balanceOf(vault.address)).to.equal(100000000);
    })
    it("Test SetTkn, SetOwner", async () => {
        console.log("~~~~~~~~~~~~Test Auth SetTkn~~~~~~~~~~~~~~~~~~~")
        await expect(vault.connect(addr1).setTkn(sdex.address))
            .to.be.revertedWith('msg.sender is not Auth!');
    
        console.log("~~~~~~~~~~~~SetTkn~~~~~~~~~~~~~~~~~~~")
        await vault.setTkn(sdex.address);
        expect(await vault.tknContract()).to.equal(sdex.address);
    
        console.log("~~~~~~~~~~~~SetOwner~~~~~~~~~~~~~~~~~~~")
        await vault.setOwner(addr1.address);
        expect(await vault.owner()).to.equal(addr1.address);
    
        console.log("~~~~~~~~~~~~Test DoubleSetTkn~~~~~~~~~~~~~~~~~~~")
        await expect(vault.setTkn(sdex.address))
            .to.be.revertedWith('tknContract is setted!');
    })
    it("Test getUnlocked_TotalBalance", async () => {
        console.log("~~~~~~~~~~~~getUnlocked_TotalBalance~~~~~~~~~~~~~~~~~~~")
        const [data1_1, data1_2] = await vault.getUnlocked_TotalBalance();
        console.log(data1_1, data1_2);
    
        const timePeriod = 24 * 3600; // 1 days
    
        await ethers.provider.send('evm_increaseTime', [timePeriod]); // 1 day pass
        await ethers.provider.send('evm_mine');
        const [data2_1, data2_2] = await vault.getUnlocked_TotalBalance();
        console.log(data2_1, data2_2);
    
        await ethers.provider.send('evm_increaseTime', [timePeriod * 634]); // 1 + 634 days pass
        await ethers.provider.send('evm_mine');
        const [data3_1, data3_2] = await vault.getUnlocked_TotalBalance();
        console.log(data3_1, data3_2);
    
        expect(data3_1).to.equal(ethers.BigNumber.from(50119562));
      });
      it("Test withdraw", async () => {
        console.log("~~~~~~~~~~~~Test Withdraw : not owner~~~~~~~~~~~~~~~~~~~")
        await expect(vault.connect(addr2).withdraw(addr2.address, 50119561))
            .to.be.revertedWith('msg.sender is not Owner!');
            
        console.log("~~~~~~~~~~~~withdraw~~~~~~~~~~~~~~~~~~~")
        await vault.connect(addr1).withdraw(addr2.address, 50119561);
        expect(await sdex.balanceOf(addr2.address)).to.equal(ethers.BigNumber.from(50119561));
        expect(await sdex.balanceOf(vault.address)).to.equal(ethers.BigNumber.from(100000000-50119561));
        const [data1_1, data1_2] = await vault.getUnlocked_TotalBalance();
        console.log(data1_1, data1_2);
    
        console.log("~~~~~~~~~~~~Test Withdraw : unlockedBalance = 0~~~~~~~~~~~~~~~~~~~")
        await expect(vault.connect(addr1).withdraw(addr2.address, 2))
            .to.be.revertedWith('unlockedBalance is bigger');
      })
    
      it("Test getUnlocked_TotalBalance passed 700 days", async () => {
        console.log("~~~~~~~~~~~~getUnlocked_TotalBalance~~~~~~~~~~~~~~~~~~~")
        const [data1_1, data1_2] = await vault.getUnlocked_TotalBalance();
        console.log(data1_1, data1_2);
    
        const timePeriod = 24 * 3600; // 1 days
    
        await ethers.provider.send('evm_increaseTime', [timePeriod * 65]); // 65 day pass (from start passed 700 days) 
        await ethers.provider.send('evm_mine');
        const [data2_1, data2_2] = await vault.getUnlocked_TotalBalance();
        console.log(data2_1, data2_2);
    
        expect(data2_1).to.equal(ethers.BigNumber.from(30251960));
      })
});