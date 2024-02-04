// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SimpleExchange {
    address public admin;
    IERC20 public token;

    event TokensPurchased(address buyer, uint256 amount);

    constructor(address tokenAddress) {
        admin = msg.sender;
        token = IERC20(tokenAddress);
    }

    function buyTokens() external payable {
        require(msg.value > 0, "Send ETH to buy tokens");
        uint256 tokenAmount = msg.value; // Simplified exchange rate: 1 ETH = 1 Token
        token.transfer(msg.sender, tokenAmount);
        emit TokensPurchased(msg.sender, tokenAmount);
    }

    function withdraw() external {
        require(msg.sender == admin, "Only admin can withdraw");
        payable(admin).transfer(address(this).balance);
    }
}
