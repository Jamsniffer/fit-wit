const { User } = require("../models");

const userData = [
  {
    username: "Matt",
    email: "Matt@gmail.com",
    password: "fake_password",
  },
  {
    username: "Hunter",
    email: "Hunter@gmail.com",
    password: "fake_password",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
