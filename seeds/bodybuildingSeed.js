const {Bodybuilding} = require("../models");

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
