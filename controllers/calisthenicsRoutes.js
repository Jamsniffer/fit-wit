const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Calisthenics } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
  Calisthenics.findAll().then((dbCalisthenicsData) => {
    const calisthenics = dbCalisthenicsData.map((calisthenics) =>
      calisthenics.get({ plain: true })
    );
    res.render("calisthenics", { calisthenics });
  });
});

module.exports = router;
