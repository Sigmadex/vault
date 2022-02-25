<img src="https://user-images.githubusercontent.com/33762147/155625647-55c69f06-e0ea-44a8-a425-7aa086c329c5.png" style="border-radius:50%;width:72px;">

# Vault for Timelock Curve

## Summary
<em>Sigmadex is researching and developing a optimal price discovery and liquidity mechanism for newly speculative assets. This mechanism, dubbed an Automated Vesting Market (AVM), has several potential applications in areas of distribution and vesting; our first exploration will delve into the use case of balancing volume against a curve while obtaining a proper price discovery over time.</em>

## Motivation
The idea of an AVM is to leverage a mathematical model, independent parameters and a smart contract architecture to handle the dynamic distribution of assets when called for by the contract owner.

## Vesting Curve
<img src="https://render.githubusercontent.com/render/math?math=A\left(\left(1-y_{0}\right)\cdot\left(1-i^{\left(-x\right)}\right)\cdot\left(\frac{1}{1-i^{-t}}\right)+y_{0}\right)" style="width:300px;">

## How It Works
The vault is a Smart Contract which increases the total allowance of token withdrawal against a mathematical vesting formula as time progresses.

|query|r/w|type|desc|
|----------|----|-------|----------------------|
|`owner`   |read|address|Address of vault owner|
|`auth`    |read|address|Address of the admin who can set the `owner` of the vault|
|`totalBalance` |read|uint256|Displays the entire token balance|
|`unlockedBalance`|read|unit256|Displays the balance available for withdrawal|
|`withdraw`|write|address, uint256|Function to withdraw SDEX tokens from the vault|
|`setOwner`|write|address|Sets the `owner` of the vault, this function can only be called by the `auth` wallet|
|`setTkn`|write|address|Sets the smart contract address must be `auth` to use function|

## Process

1. Smart Contract Vault is deployed. `Auth` is immediately set to the user who deployed the contract.
2. SDEX tokens are deposited into the vault.
