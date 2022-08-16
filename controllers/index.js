const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard-routes");
const { route } = require("./dashboard-routes");
const calisthenicsRoutes = require('./calisthenicsRoutes');

router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes)
router.use('/calisthenics', calisthenicsRoutes)
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
