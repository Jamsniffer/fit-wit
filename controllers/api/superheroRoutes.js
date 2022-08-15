const router = require("express").Router();
const { Superhero } = require("../../models");

router.get("/", async (req, res) => {
  //find all
  Superhero.findAll()
    .then((SuperheroData) => {
      res.json(SuperheroData);
    })
    .catch((err) => {
      console.log("error/ superhero:", err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  //find by id
  Superhero.findByPk(req.params.id)
    .then((SuperheroData) => {
      res.json(SuperheroData);
    })
    .catch((err) => {
      console.log("error/ bodybuilding:", err);
      res.status(500).json(err);
    });
});

module.exports = router;
