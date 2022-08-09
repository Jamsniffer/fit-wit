const { Weightlifting } = require("../models/WeightLifting");

const weightLiftingData = [
  {
    exercise_name: "Chest Press",
    description: "Chest Press Description",
  },
  {
    exercise_name: "DeAdlift",
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

const seedWeightlifting = () => Weightlifting.bulkCreate(weightLiftingData);

module.exports = seedWeightlifting;
