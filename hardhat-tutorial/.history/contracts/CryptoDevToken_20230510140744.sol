// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./ICryptoDevs.sol";

contract CryptoDevs is ERC20, Ownable {
    // Price of one Crypto Dev token
    uint256 public constant tokenPrice = 0.001 ether;
    // Each NFT would give the user 10 tokens
    uint256 public constant tokenPerNFT = 10 * 10**18;
    // The max total Supply is 10000 for Crypto Devs Token
    uint256 public constant maxTotalSupply = 10000 * 10**18;
    // CryptoDevsNFT contract instance
    ICryptoDevs CryptoDevsNFT;
    // Mapping to keep track of which tokenIds have been claimed
}