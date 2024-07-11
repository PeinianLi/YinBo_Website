// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@5.0.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@5.0.2/access/Ownable.sol";
import "@openzeppelin/contracts@5.0.2/token/ERC20/extensions/ERC20Permit.sol";

contract ReflectTestToken is ERC20, ERC20Burnable, Ownable, ERC20Permit {
    constructor(address initialOwner)
    ERC20("ReflectTestToken", "RFLTTK")
    Ownable(initialOwner)
    ERC20Permit("ReflectTestToken")
    {
        _mint(msg.sender, 10000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public {
        _mint(to, amount * 1000000000000000000);
    }
}
