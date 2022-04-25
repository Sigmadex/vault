// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

// Learn more about the ERC20 implementation 
// on OpenZeppelin docs: https://docs.openzeppelin.com/contracts/4.x/erc20
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SDEX is ERC20 {
    constructor() ERC20("Sigma DEX", "SDEX") {
        _mint(msg.sender, 100000 * 10 ** 18);
    }
}