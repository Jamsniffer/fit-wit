const { Superhero } = require("../models");

const superheroData = [
  {
    hero_name: "Spiderman",
  },
  {
    hero_name: "Deadpool",
  },
  {
    hero_name: "Black Widow",
  },
  {
    hero_name: "Scarlet Witch",
  },
  {
    hero_name: "Black Panther",
  },
];

const seedSuperhero = () => Superhero.bulkCreate(superheroData);

module.exports = seedSuperhero;
