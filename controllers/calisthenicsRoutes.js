const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Calisthenics } = require("../models");
const withAuth = require("../utils/auth");

router
  .get("/", (req, res) => {
    Calisthenics.findAll().then((dbCalisthenicsData) => {
      const workout = dbCalisthenicsData.map((workout) =>
        workout.get({ plain: true })
      );
      res.render("full-workout-list", { workout });
    });
  })


module.exports = router
