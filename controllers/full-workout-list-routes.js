const router = require("express").Router();
const models = require("../models");
const withAuth = require("../utils/auth");

const { Calisthenics, Weighttraining } = models;
router.get("/", async (req, res) => {
  const userData = await models.User.findByPk(req.session.user_id);
  const pureUser = userData.get({ plain: true });

      // TODO add users workouts.
      res.render("full-workout-list", {workoutArray: JSON.parse(pureUser.fullWorkoutListArray)});
    });
  

module.exports = router;
