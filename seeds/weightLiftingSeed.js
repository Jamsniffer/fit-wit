const { WeightLifting } = require("../models");

const weightLiftingData = [
  {
    exercise_name: "Chest Press",
    description: "Chest Press Description",
  },
  {
    exercise_name: "Deadlift",
    description: "Deadlift Description",
  },
  {
    exercise_name: "Squat",
    description: "Squat Description",
  },
  {
    exercise_name: "Leg Press",
    description: "Leg Press Description",
  },
  {
    exercise_name: "Biceps Arm Curl",
    description: "Biceps Arm Curl Description",
  },
];

const seedWeightlifting = () => WeightLifting.bulkCreate(weightLiftingData);

module.exports = seedWeightlifting;
