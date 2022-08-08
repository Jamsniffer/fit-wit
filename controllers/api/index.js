const router = require('express').Router();
const templateRoutes = require('./template');
const bodybuildingRoutes = require('./bodybuildingRoutes');
const calisthenicsRoutes = require('./calisthenicsRoutes');
const cardioRoutes = require('./cardioRoutes');
const crossfitRoutes = require('./crossfitRoutes');
const powerLiftingRoutes = require('./powerLiftingRoutes');
const wieghtLiftingRoutes = require('./wieghtLiftingRoutes');

router.use('/bodybuilding', bodybuildingRoutes);
router.use('/calisthenics', calisthenicsRoutes);
router.use('./cardio', cardioRoutes);
router.use('./crossfit', crossfitRoutes);
router.use('/powerLifting', powerLiftingRoutes);
router.use('/weightLifting', wieghtLiftingRoutes);

module.exports = router