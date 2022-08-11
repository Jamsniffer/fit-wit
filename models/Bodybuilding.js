const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bodybuilding extends Model { }

Bodybuilding.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        exercise_name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'bodybuilding'
    }
);

module.exports = Bodybuilding;