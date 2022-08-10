// const seedBodyBuilding = require("./bodybuildingSeed");
// const seedCalisthenics = require("./calisthenicsSeed");
// const seedCardio = require("./cardioSeed");
// const seedCrossfit = require("./crossfitSeed");
const seedPowerlifting = require("./powerliftingSeed");
// const seedWeightlifting = require("./weightLiftingSeed");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  // await seedBodyBuilding();
  // console.log("\n----- BODYBUILDING EXERCISES SEEDED -----\n");

  // await seedCalisthenics();
  // console.log("\n----- CALISTHENICS EXERCISES SEEDED -----\n");

  // await seedCardio();
  // console.log("\n----- CARDIO EXERCISES SEEDED -----\n");

  // await seedCrossfit();
  // console.log("\n----- CROSSFIT EXERCISES SEEDED -----\n");

  await seedPowerlifting();
  console.log("\n----- POWERLIFTING EXERCISES SEEDED -----\n");

  // await seedWeightlifting();
  // console.log("\n----- WEIGHTLIFTING EXERCISES SEEDED -----\n");

  process.exit(0);
};

seedAll();
