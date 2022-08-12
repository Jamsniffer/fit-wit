const router = require('express').Router();
const bodybuildingRoutes = require('./bodybuildingRoutes');
const calisthenicsRoutes = require('./calisthenicsRoutes');
const cardioRoutes = require('./cardioRoutes');
const crossfitRoutes = require('./crossfitRoutes');
const powerLiftingRoutes = require('./powerLiftingRoutes');
const weightLiftingRoutes = require('./weightLiftingRoutes');
const userRoutes = require('./userRoutes');


router.use('/bodybuilding', bodybuildingRoutes);
router.use('/calisthenics', calisthenicsRoutes);
router.use('/cardio', cardioRoutes);
router.use('/crossfit', crossfitRoutes);
router.use('/powerlifting', powerLiftingRoutes);
router.use('/weightlifting', weightLiftingRoutes);

router.use('./user', userRoutes);

module.exports = router