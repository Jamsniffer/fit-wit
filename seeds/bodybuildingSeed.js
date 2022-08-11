const Bodybuilding = require("../models/Bodybuilding");

const bodyBuildData = [
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

const seedBodyBuilding = () => Bodybuilding.bulkCreate(bodyBuildData);

module.exports = seedBodyBuilding;
