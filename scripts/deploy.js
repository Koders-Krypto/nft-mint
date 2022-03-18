const hre = require("hardhat");

async function main() {
  const FantomBulls = await hre.ethers.getContractFactory("FantomBulls");
  const fantomBulls = await FantomBulls.deploy();
  await fantomBulls.deployed();
  console.log("FantomBulls deployed to:", fantomBulls.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
