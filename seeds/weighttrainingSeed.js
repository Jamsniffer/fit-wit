const { Weighttraining } = require("../models");

const weighttrainingData = [
  {
    exercise_name: "Chest Press",
    description:
      "Start with your arms at chest level at your sides, elbows bent and pointing out. Slowly exhale and lift your arms above your chest. Inhale and slowly lower your arms to your sides to the starting position. Continue to press up.",
    sets: 3,
    reps: 10,
    weight: 100
  },
  {
    exercise_name: "Deadlift",
    description:
      "A movement in which your hips hinge backward to lower down and pick up a weighted barbell or kettlebell from the floor. Your back is flat throughout.",
    sets: 3,
    reps: 10,
    weight: 100
  },
  {
    exercise_name: "Squat",
    description:
      "Lowers your hips from a standing position and then stand back up. During the descent of a squat, the hip and knee joints flex while the ankle joint dorsiflexes; the hip and knee joints extend and the ankle joint plantarflexes when standing up.",
    sets: 3,
    reps: 10,
    weight: 100
  },
  {
    exercise_name: "Leg Press",
    description:
      "In a seated position. Your legs repeatedly press against weights, which can be adjusted. This targets your quads, glutes, hamstrings, hips, and calves. The seated position of leg presses helps keep your upper body and torso still.",
    sets: 3,
    reps: 10,
    weight: 100
  },
  {
    exercise_name: "Biceps Arm Curl",
    description:
      "Hold barbell with both hands facing up so the wrists, elbows, and shoulders are in a straight line about shoulder-width apart. Lift the barbell toward the shoulders while bending the elbows. Slowly lower the weight to return to the starting position.",
    sets: 3,
    reps: 10,
    weight: 100
  },
  {
    exercise_name: "Pause Squat",
    description:
      "Pause squats are exactly what they sound like. They're a regular squat, except you'll add a pause at the bottom of the squat. (You can also pause halfway between the top and parallel of the squat, though pausing at the bottom is more common.)",
    sets: 3,
    reps: 10,
    weight: 100
  },
  {
    exercise_name: "Good Morning",
    description:
      "Perform good morning exercises by standing with your feet shoulder-width apart. Unrack a weighted barbell and rest it on your upper back using a similar bar position as a back squat.",
    sets: 3,
    reps: 10,
    weight: 100
  },
  {
    exercise_name: "Bulgarian Split Squat",
    description:
      "The Bulgarian split squat is a version of a single-leg squat where the back leg is elevated on a bench or a sturdy chair. As a single-leg, unilateral squat, the exercise focuses more on the quadriceps than other, similar lower-body compound movements.",
    sets: 3,
    reps: 10,
    weight: 100
  },
];

const seedWeightlifting = () => Weighttraining.bulkCreate(weighttrainingData);

module.exports = seedWeightlifting;
