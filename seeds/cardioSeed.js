const Cardio = require("../models");

const cardioData = [
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

const seedCardio = () => Cardio.bulkCreate(cardioData);

module.exports = seedCardio;
