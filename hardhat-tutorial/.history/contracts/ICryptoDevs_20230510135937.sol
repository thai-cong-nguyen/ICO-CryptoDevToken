// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ICryptoDevs {
    function tokenOfOwnerByIndex(address owner, unit256 index) external view returns (unit256 tokenId);
    
    
}