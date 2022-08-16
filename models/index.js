const Weighttraining = require("./Weighttraining")
const Calisthenics = require('./Calisthenics')
const Superhero = require('./Superhero')


const User = require('./User')

// Table associations
Weighttraining.hasOne(User);
User.belongsTo(Weighttraining, {
    foreignKey: 'weighttraining_id'
});

Calisthenics.hasOne(User);
User.belongsTo(Calisthenics, {
  foreignKey: "calisthenics_id",
});

Superhero.hasOne(User);
User.belongsTo(Superhero, {
    foreignKey: "hero_id",
});

module.exports = {
    Weighttraining,
    Calisthenics,
    User,
    Superhero
}
