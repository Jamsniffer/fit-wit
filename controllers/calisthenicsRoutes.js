const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Calisthenics } = require("../models");
const withAuth = require("../utils/auth");

router
  .get("/", withAuth, (req, res) => {
    Calisthenics.findAll();
  })
  .then((dbCalisthenicsData) => {
    const workout = dbCalisthenicsData.map((workout) =>
      workout.get({ plain: true })
    );
    res.render("calisthenics", { workout });
  });
