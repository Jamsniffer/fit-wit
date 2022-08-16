const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard-routes");
const calisthenicsRoutes = require('./calisthenicsRoutes');
const fullWorkoutRoutes = require('./full-workout-list-routes');
const weighttrainingRoutes = require("./weighttrainingRoutes");

router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes)
router.use('/calisthenics', calisthenicsRoutes)
router.use("/full-workout-list", fullWorkoutRoutes);
router.use("/api", apiRoutes);
router.use("/weighttraining", weighttrainingRoutes)

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
