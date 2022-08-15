const {Calisthenics} = require("../models");

const calisthenicsData = [
  {
    exercise_name: "Jumping Jacks",
    description:
      "Performed from a standing position by jumping to a position with legs spread and arms raised and then to the original position",
  },
  {
    exercise_name: "The Plank",
    description:
      "involves holding the trunk part of your body in a straight line off the ground. The static exercise engages multiple muscle groups at the same time which makes it extremely effective at strengthening your core, whilst also working the shoulders, arms and glutes.",
  },
  {
    exercise_name: "Lying Knee Tucks",
    description:
      "Lie on your back with your legs extended and hands at your sides. Lift your heels and press your lower back into the ground. Brace your abs and pull your knees toward your chest. Extend your legs back out without letting your heels touch the floor.",
  },
  {
    exercise_name: "Pike Pushups",
    description:
      "Lift hips up and back until your body forms an inverted V shape. Keep arms and legs as straight as possible. Start to bend elbows, and then lower your entire upper body toward the floor. Stay there for a moment, then slowly push back up until your arms are straight and you're in the inverted V position.",
  },
];

const seedCalisthenics = () => Calisthenics.bulkCreate(calisthenicsData);

module.exports = seedCalisthenics;
