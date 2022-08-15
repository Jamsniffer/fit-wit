const Bodybuilding = require("./Bodybuilding")
const Calisthenics = require('./Calisthenics')
const Cardio = require('./Cardio')
const Crossfit = require('./Crossfit')
const PowerLifting = require('./PowerLifting')
const WeightLifting = require('./WeightLifting')
const Superhero = require('./Superhero')

const User = require('./User')

// TO DO: Table associations
Bodybuilding.belongsTo(User, {
    foreignKey: 'user_id'
})

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
