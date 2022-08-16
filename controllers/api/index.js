const router = require('express').Router();

const userRoutes = require("./userRoutes");

const calisthenicsRoutes = require('./calisthenicsRoutes');
const weighttrainingRoutes = require('./weighttrainingRoutes');
const superheroRoutes = require('./superheroRoutes');
const fullWorkoutRoutes = require('./fullWorkoutListRoutes')

router.use("/user", userRoutes);
router.use("/weighttraining", weighttrainingRoutes);
router.use('/calisthenics', calisthenicsRoutes);
router.use("/superhero", superheroRoutes);
router.use("/full-workout-list", fullWorkoutRoutes);



module.exports = router