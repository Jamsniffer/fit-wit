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

  await seedCalisthenics();
  console.log("\n----- CALISTHENICS EXERCISES SEEDED -----\n");

  await seedWeighttraining();
  console.log("\n----- WEIGHTTRAINING EXERCISES SEEDED -----\n");

  await seedSuperhero();
  console.log("\n----- SUPERHERO TABLE SEEDED -----\n");

  await seedUser();
  console.log("\n----- USER TABLE SEEDED -----\n");

  process.exit(0);
};

seedAll();
