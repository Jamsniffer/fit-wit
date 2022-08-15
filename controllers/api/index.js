const router = require('express').Router();

const userRoutes = require("./userRoutes");

const bodybuildingRoutes = require('./bodybuildingRoutes');
const calisthenicsRoutes = require('./calisthenicsRoutes');
const cardioRoutes = require('./cardioRoutes');
const crossfitRoutes = require('./crossfitRoutes');
const powerLiftingRoutes = require('./powerLiftingRoutes');
const weightLiftingRoutes = require('./weightLiftingRoutes');
const superheroRoutes = require('./superheroRoutes');


router.use("/user", userRoutes);
router.use('/bodybuilding', bodybuildingRoutes);
router.use('/calisthenics', calisthenicsRoutes);
router.use('/cardio', cardioRoutes);
router.use('/crossfit', crossfitRoutes);
router.use('/powerlifting', powerLiftingRoutes);
router.use('/weightlifting', weightLiftingRoutes);
router.use("/superhero", superheroRoutes);



module.exports = router