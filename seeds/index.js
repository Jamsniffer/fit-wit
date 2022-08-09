const seedBodyBuilding = require("./bodybuildingSeed");
const seedCalisthenics = require("./calisthenicsSeed");
const seedCardio = require("./cardioSeed");

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

  process.exit(0);
};

seedAll();
