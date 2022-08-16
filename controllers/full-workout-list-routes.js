const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Calisthenics, Weighttraining } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", (req, res) => {
    Calisthenics.findAll().then((dbCalisthenicsData) => {
        const calisthenics = dbCalisthenicsData.map((calisthenics) =>
            calisthenics.get({ plain: true })
        );
        Weighttraining.findAll().then((dbCalisthenicsData) => {
            const weighttraining = dbCalisthenicsData.map((weighttraining) =>
                weighttraining.get({ plain: true })
            );
            res.render("full-workout-list", { weighttraining, calisthenics });
        });
    });
});

module.exports = router;
