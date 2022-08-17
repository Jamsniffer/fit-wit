const Weighttraining = require("./Weighttraining")
const Calisthenics = require('./Calisthenics')
const Superhero = require('./Superhero')
const User = require('./User')

// Table associations
Weighttraining.hasOne(User);
User.belongsTo(Weighttraining);

Calisthenics.hasOne(User);
User.belongsTo(Calisthenics);

Superhero.hasOne(User);
User.belongsTo(Superhero);

module.exports = {
    Weighttraining,
    Calisthenics,
    User,
    Superhero
}
