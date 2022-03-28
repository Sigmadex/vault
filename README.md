<img src="https://user-images.githubusercontent.com/33762147/155625647-55c69f06-e0ea-44a8-a425-7aa086c329c5.png" style="border-radius:50%;width:72px;">

# Vault for Timelock Curve

## Summary
<em>Sigmadex is researching and developing a optimal price discovery and liquidity mechanism for newly speculative assets. This mechanism, dubbed an Automated Vesting Market (AVM), has several potential applications in areas of distribution and vesting; our first exploration will delve into the use case of balancing volume against a curve while obtaining a proper price discovery over time.</em>

## Motivation
The idea of an AVM is to leverage a mathematical model, independent parameters and a smart contract architecture to handle the dynamic distribution of assets when called for by the contract owner.

## Vesting Curve
### Formula

<p align="center">
<img src="https://render.githubusercontent.com/render/math?math=A\left(\left(1-y_{0}\right)\cdot\left(1-i^{\left(-x\right)}\right)\cdot\left(\frac{1}{1-i^{-t}}\right)%2By_{0}\right)" style="width:300px;">
</p>

### Example Regression

<p align="center">
<img src="https://user-images.githubusercontent.com/33762147/155788169-8b64b219-8474-4ed5-95d0-a21994a9645f.png" style="width:500px;">
</p>

### Variables
<div align="center">

| var | desc |   
| --- | ---  |
|<em>A</em>  |Amplitude  |
|<em>t</em>  |Days       |
|<em>i</em>  |Concave    |
|<em>y^0</em>|Starting Point|

</div>

## How It Works
The vault is a Smart Contract which increases the total allowance of token withdrawal against a mathematical vesting formula as time progresses.

|query|r/w|type|desc|
|----------|----|-------|----------------------|
|`owner`   |read|<em>address</em>|Address of vault owner|
|`auth`    |read|<em>address</em>|Address of the admin who can set the `owner` of the vault|
|`tknContract`  |read|<em>address</em>|Contract address of the tokens to track in the vault|
|`totalBalance` |read|<em>uint256</em>|Displays the entire token balance|
|`unlockedBalance`|read|<em>unit256</em>|Displays the balance available for withdrawal|
|`withdraw`|write|<em>address</em>, <em>uint256</em>|Function to withdraw <em>uint256</em> amount of SDEX tokens from the vault to the <em>address</em> wallet connected|
|`setOwner`|write|<em>address</em>|Sets the `owner` of the vault, this function can only be called by the `auth` wallet|
|`setTkn`|write|<em>address</em>|Sets the token smart contract address to track `tknContract` - must be `auth` to use function|

## Process
1. Smart Contract Vault is deployed via Remix
   - `auth` sets itself to deployer <em>address</em>
   - `setTkn` <em>address</em> is set by `auth`
   - `setOwner` is called by `auth` to set owner of the contract to a specific <em>address</em>
2. SDEX tokens are deposited into the vault
4. `unlockedBalance` should be updated every 24 hr [timestamp]
5. If `withdraw` is called with an `unlockedBalance` greater than 0, allow transfer of maximum `unlockedBalance` to <em>address</em>

## Contract Permissions

Write functions for vault contract.
|function|permissions|
|--------|-----------|
|`withdraw`| can only be called by `owner` and the function should throw an exception if `owner` is not set|
|`setTkn`| can only be called by `auth` otherwise throw exception|
|`setOwner`| can only be called once by `auth` otherwise throw exception|

## Proposed Flow Diagram

<img src="https://user-images.githubusercontent.com/33762147/155869551-3615c0a0-f339-4216-866d-68798a03719b.png">

## Wireframe

### Claim (User)
Wallet Not Connected Yet:
![2022-03-25_10-27-34](https://user-images.githubusercontent.com/33762147/160161655-13d0358a-b071-42e3-87a9-64ad5f61fc48.jpg)

Wallet Connected:
![2022-03-25_10-25-15](https://user-images.githubusercontent.com/33762147/160161283-9269442d-c41d-48fc-9b41-b814e898096b.jpg)

### Claim History (Private)

<div align="center">
   
|TX ID|Timestamp|Vault Address|Destination|Claim Amount|
|-----|---------|-------------|----------|-------------|
   
</div>

![2022-03-25_10-31-50](https://user-images.githubusercontent.com/33762147/160162271-12b47497-39d2-481d-85cc-dc0037b888c7.jpg)
   
## Figma Design

<div align="center">
   
![2022-03-25_13-58-31](https://user-images.githubusercontent.com/33762147/160192646-907ba8cc-cf29-4710-be6d-53b08b882b9b.jpg)
   
https://www.figma.com/file/jKQZgP4Vw4n3P0Lf1k7wQ5/Vault-Sigma?node-id=0%3A1
</div>

## Proposed Deployment Locations

|Desc|Domain|
|-------|-----------|
|Claim Vault|https://vault.sigmadex.org|
|Claim History|https://vault.sigmadex.org/history|

[timestamp]: https://support.avax.network/en/articles/5106526-measuring-time-in-smart-contracts
