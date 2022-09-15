pragma solidity >=0.8.0 <0.9.0;
// SPDX-License-Identifier: MIT

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';
import './YourToken.sol';

contract Vendor is Ownable {
  YourToken public gold;
  uint256 public constant tokensPerEth = 100;
  using SafeMath for uint256;
  event BuyTokens(address buyer, uint256 amountOfEth, uint256 amountOfTokens);

  constructor(address tokenAddress) {
    gold = YourToken(tokenAddress);
  }

  // ToDo: create a payable buyTokens() function:
  function buyTokens() external payable {
    uint256 value = msg.value;
    require(value > 0, 'need eth');
    uint256 amount = value.mul(tokensPerEth);
    require(amount <= gold.balanceOf(address(this)), 'no balanceOf(account);');
    gold.transfer(msg.sender, amount);
    emit BuyTokens(msg.sender, msg.value, amount);
  }

  // ToDo: create a withdraw() function that lets the owner withdraw ETH
  function withdraw() external onlyOwner {
    require(address(this).balance > 0);
    require(payable(address(this)).send(address(this).balance));
  }

  // ToDo: create a sellTokens() function:
  function sellTokens(uint256 tokenAmount) external {
    address recipient = address(this);
    address sender = msg.sender;
    uint256 ethAmount = tokenAmount.div(tokensPerEth);
    require(gold.balanceOf(sender) >= tokenAmount, 'no balance');
    uint256 _allowances = IERC20(gold).allowance(sender, recipient);
    require(tokenAmount <= _allowances, 'no _allowances');
    require(recipient.balance >= ethAmount, 'no eth');
    gold.transferFrom(sender, recipient, tokenAmount);
    require(payable(sender).send(ethAmount), 'send eth error');
  }
}
