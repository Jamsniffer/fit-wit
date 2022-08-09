const { Calisthenics } = require("../models/Calisthenics");

const calisthenicsData = [
  {
    exercise_name: "Jumping Jacks",
    description: "",
  },
  {
    exercise_name: "The Plank",
    description: "",
  },
  {
    exercise_name: "Lying Knee Tucks",
    description: "",
  },
  {
    exercise_name: "Pike Pushups",
    description: "",
  },
  {
    exercise_name: "The Human Flag",
    description: "",
  },
];

const seedCalisthenics = () => Calisthenics.bulkCreate(calisthenicsData);

module.exports = seedCalisthenics;
