const { Weighttraining } = require("../models");

const weighttrainingData = [
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
];

const seedWeightlifting = () => Weighttraining.bulkCreate(weighttrainingData);

module.exports = seedWeightlifting;
