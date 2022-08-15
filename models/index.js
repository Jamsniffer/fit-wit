const Bodybuilding = require("./Weighttraining")
const Calisthenics = require('./Calisthenics')
const Superhero = require('./Superhero')

const User = require('./User')

// Table associations
User.belongsTo(Bodybuilding, {
    foreignKey: 'bodybuilding_id'
})

User.belongsTo(Calisthenics, {
  foreignKey: "calisthenics_id",
});

User.belongsTo(Superhero, {
    foreignKey: "hero_id",
});

module.exports = {
    Bodybuilding,
    Calisthenics,
    Cardio,
    Crossfit,
    PowerLifting,
    WeightLifting,
    User,
    Superhero
}
