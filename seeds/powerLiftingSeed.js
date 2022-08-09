const { Powerlifting } = require("../models/PowerLifting");

const powerLiftingData = [
  {
    exercise_name: "",
    description: "",
  },
  {
    exercise_name: "",
    description: "",
  },
  {
    exercise_name: "",
    description: "",
  },
  {
    exercise_name: "",
    description: "",
  },
  {
    exercise_name: "",
    description: "",
  },
];

const seedPowerlifting = () => Powerlifting.bulkCreate(powerLiftingData);

module.exports = seedPowerlifting;
