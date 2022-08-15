const seedBodyBuilding = require("./bodybuildingSeed");
const seedCalisthenics = require("./calisthenicsSeed");
const seedPowerlifting = require("./powerLiftingSeed");
const seedWeighttraining = require("./weighttrainingSeed");
const seedSuperhero = require("./superheroSeed");

const seedUser = require("./userSeed");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedBodyBuilding();
  console.log("\n----- BODYBUILDING EXERCISES SEEDED -----\n");

  await seedCalisthenics();
  console.log("\n----- CALISTHENICS EXERCISES SEEDED -----\n");

  await seedCardio();
  console.log("\n----- CARDIO EXERCISES SEEDED -----\n");

  await seedCrossfit();
  console.log("\n----- CROSSFIT EXERCISES SEEDED -----\n");

  await seedPowerlifting();
  console.log("\n----- POWERLIFTING EXERCISES SEEDED -----\n");

  await seedWeighttraining();
  console.log("\n----- WEIGHTTRAINING EXERCISES SEEDED -----\n");

  await seedUser();
  console.log("\n----- USER TABLE SEEDED -----\n");

  await seedSuperhero();
  console.log("\n----- SUPERHERO TABLE SEEDED -----\n");

  process.exit(0);
};

seedAll();
