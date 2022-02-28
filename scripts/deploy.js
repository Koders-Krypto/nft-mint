const hre = require("hardhat");

async function main() {
  const PlaceHolder = await hre.ethers.getContractFactory("PlaceHolder");
  const placeHolder = await PlaceHolder.deploy();
  await placeHolder.deployed();
  console.log("PlaceHolder deployed to:", placeHolder.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
