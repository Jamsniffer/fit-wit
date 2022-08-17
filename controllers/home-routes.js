const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/calisthenics", (req, res) => {
  res.render("calisthenics");
});

router.get("/weighttraining", (req, res) => {
  res.render("weighttraining");
});

router.get("/full-workout-list", (req, res) => {
  res.render("full-workout-list");
});

router.get("/chosen-exercise", (req, res) => {
  res.render("chosen-exercise");
});

module.exports = router;