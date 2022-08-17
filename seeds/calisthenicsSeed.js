const {Calisthenics} = require("../models");

const calisthenicsData = [
  {
    exercise_name: "Jumping Jacks",
    description:
      "Performed from a standing position by jumping to a position with legs spread and arms raised and then to the original position.",
  },
  {
    exercise_name: "The Plank",
    description:
      "The static exercise engages multiple muscle groups at the same time which makes it extremely effective at strengthening your core.",
  },
  {
    exercise_name: "Lying Knee Tucks",
    description:
      "Lie on your back. Lift your heels and press your lower back into the ground. Pull your knees toward your chest. Extend your legs back out.",
  },
  {
    exercise_name: "Pike Pushups",
    description:
      "Lift hips up and back until your body forms an inverted V shape. Lower your entire upper body toward the floor.",
  },
];

const seedCalisthenics = () => Calisthenics.bulkCreate(calisthenicsData);

module.exports = seedCalisthenics;
