const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Crossfit extends Model { }

Crossfit.init(
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
        modelName: 'crossfit'
    }
);

module.exports = Crossfit;