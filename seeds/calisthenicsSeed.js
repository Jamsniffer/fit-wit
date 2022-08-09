const { Calisthenics } = require("../models/Calisthenics");

const calisthenicsData = [
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

const seedCalisthenics = () => Calisthenics.bulkCreate(calisthenicsData);

module.exports = seedCalisthenics;
