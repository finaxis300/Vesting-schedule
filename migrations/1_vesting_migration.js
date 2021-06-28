const Vesting = artifacts.require("Vesting");
const Vesting_Factory = artifacts.require("Vesting_Factory");

module.exports = async function (deployer) {
  await deployer.deploy(Vesting);
  const vestingInstance = await Vesting.deployed();
  await deployer.deploy(Vesting_Factory, vestingInstance.address);
  
  // const vestingFactoryInstance = await Vesting_Factory.deployed();
  // console.log("vesting instance", vestingInstance);
};
