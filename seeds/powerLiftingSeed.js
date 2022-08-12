const PowerLifting = require("../models");

const powerLiftingData = [
  {
    exercise_name: "Pause Squat",
    description: "Pause Squat Description",
  },
  {
    exercise_name: "Good Morning",
    description: "Good Morning Description",
  },
  {
    exercise_name: "Bulgarian Split Squat",
    description: "Bulgarian Split Squat Description",
  },
  {
    exercise_name: "Close-Grip Bench Press",
    description: "Close-Grip Bench Press Descriptions",
  },
  {
    exercise_name: "Deadlift",
    description: "Deadlift Description",
  },
];

const seedPowerlifting = () => PowerLifting.bulkCreate(powerLiftingData);

module.exports = seedPowerlifting;
