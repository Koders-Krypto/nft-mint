// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract FantomBulls is ERC721, ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    uint256 mintPrice = 10 ether;

    Counters.Counter private _tokenIdCounter;

    struct Minter {
        address addr;
        uint256 token;
    }

    mapping(uint256 => Minter) itemMinter;

    constructor() ERC721("FantomBulls", "BULL") {}

    function safeMint(uint256 count) public payable {
        require(msg.value * count < mintPrice * count, "Insufficient Fantom");
        for (uint256 i = 0; i < count; i++) {
            _tokenIdCounter.increment();
            uint256 tokenId = _tokenIdCounter.current();
            _safeMint(msg.sender, tokenId);
        }
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}