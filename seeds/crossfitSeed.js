const { Crossfit } = require("../models/Crossfit");

const crossfitData = [
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

const seedCrossfit = () => Crossfit.bulkCreate(crossfitData);

module.exports = seedCrossfit;
