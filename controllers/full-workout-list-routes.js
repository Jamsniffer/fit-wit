const router = require("express").Router();
const sequelize = require("../config/connection");
const models = require("../models");
const withAuth = require("../utils/auth");
const {Calisthenics, Weighttraining} = models;
router.get("/", (req, res) => {
    Calisthenics.findAll().then((dbCalisthenicsData) => {
        const calisthenics = dbCalisthenicsData.map((calisthenics) =>
            calisthenics.get({ plain: true })
        );
        Weighttraining.findAll().then((dbWeighttrainingData) => {
            const weighttraining = dbWeighttrainingData.map((weighttraining) =>
                weighttraining.get({ plain: true })
            );
            // TODO add users workouts. 
            res.render("full-workout-list", { weighttraining, calisthenics });
        });
    });
});


module.exports = router;
