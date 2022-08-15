const { Weighttraining } = require("../models");

const weighttrainingData = [
  {
    exercise_name: "Chest Press",
    description:
      "Start with your arms at chest level at your sides, elbows bent and pointing out. Slowly exhale and lift your arms above your chest. Inhale and slowly lower your arms to your sides to the starting position. Continue to press up.",
  },
  {
    exercise_name: "Deadlift",
    description:
      "The deadlift is a movement in which your hips hinge backward to lower down and pick up a weighted barbell or kettlebell from the floor. Your back is flat throughout the movement. Some benefits of performing deadlifts include strengthening and gaining more definition in your upper and lower back, glutes, and hamstrings.",
  },
  {
    exercise_name: "Squat",
    description:
      "A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up. During the descent of a squat, the hip and knee joints flex while the ankle joint dorsiflexes; conversely the hip and knee joints extend and the ankle joint plantarflexes when standing up.",
  },
  {
    exercise_name: "Leg Press",
    description:
      "Leg presses are done in a seated position. Your legs repeatedly press against weights, which can be adjusted according to your fitness level. This targets your quads, glutes, hamstrings, hips, and calves. The seated position of leg presses helps keep your upper body and torso still.",
  },
  {
    exercise_name: "Biceps Arm Curl",
    description:
      "Hold the barbell with both hands facing up so the wrists, elbows, and shoulders are in a straight line about shoulder-width apart. Lift the barbell toward the shoulders while bending the elbows and keeping them next to the middle of the body. Slowly lower the weight to return to the starting position.",
  },
  {
    exercise_name: "Pause Squat",
    description:
      "Pause squats are exactly what they sound like. They're a regular squat, except you'll add a pause at the bottom of the squat. (You can also pause halfway between the top and parallel of the squat, though pausing at the bottom is more common.)",
  },
  {
    exercise_name: "Good Morning",
    description:
      "Perform good morning exercises by standing with your feet shoulder-width apart. Unrack a weighted barbell and rest it on your upper back using a similar bar position as a back squat.",
  },
  {
    exercise_name: "Bulgarian Split Squat",
    description:
      "The Bulgarian split squat is a version of a single-leg squat where the back leg is elevated on a bench or a sturdy chair. As a single-leg, unilateral squat, the exercise focuses more on the quadriceps than other, similar lower-body compound movements.",
  },
];

const seedWeightlifting = () => Weighttraining.bulkCreate(weighttrainingData);

module.exports = seedWeightlifting;
