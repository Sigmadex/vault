# Vault
Vault for Timelock Curve

# Summary
<em>Sigmadex is researching and developing a optimal price discovery and liquidity mechanism for newly speculative assets. This mechanism, dubbed an Automated Vesting Market (AVM), has several potential applications in areas of distribution and vesting; our first exploration will delve into the use case of balancing volume against a curve while obtaining a proper price discovery over time.</em>

# Motivation
The idea of an AVM is to leverage a mathematical model, independent parameters and a smart contract architecture to handle the dynamic distribution of assets when called for by the contract owner.

# Vesting Curve
<img src="https://render.githubusercontent.com/render/math?math=A\left(\left(1-y_{0}\right)\cdot\left(1-i^{\left(-x\right)}\right)\cdot\left(\frac{1}{1-i^{-t}}\right)+y_{0}\right)" style="width:300px;">
