const Crossfit = require("../models");

const crossfitData = [
  {
    exercise_name: "Bur",
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

const seedCrossfit = () => Crossfit.bulkCreate(crossfitData);

module.exports = seedCrossfit;
