const router = require('express').Router();

const userRoutes = require("./userRoutes");

const calisthenicsRoutes = require('./calisthenicsRoutes');
const cardioRoutes = require('./cardioRoutes');
const crossfitRoutes = require('./crossfitRoutes');
const superheroRoutes = require('./superheroRoutes');


router.use("/user", userRoutes);
router.use('/bodybuilding', bodybuildingRoutes);
router.use('/calisthenics', calisthenicsRoutes);
router.use("/superhero", superheroRoutes);



module.exports = router