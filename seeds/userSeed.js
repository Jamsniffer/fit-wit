const { User } = require("../models");

const userData = [{
    id: 2,
    username: 'Helen',
    email: 'matt@vegacivil.com',
    password: '$2b$10$fWtpmQEHvSYEe2nxlfH99OluCirSbYOgGkkyFao9Yua4v4OCnqud6',
    fullWorkoutListArray: '',
}];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
