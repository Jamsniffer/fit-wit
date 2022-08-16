const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Weighttraining } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
    Weighttraining.findAll().then((dbWeighttrainingData) => {
        const weighttraining = dbWeighttrainingData.map((weighttraining) =>
            weighttraining.get({ plain: true })
        );
        res.render("full-workout-list", { weighttraining });
    });
})

module.exports = router;