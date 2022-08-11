const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cardio extends Model { }

Cardio.init(
    {
        id: {
            type: DataTypes.INTEGER,
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
        modelName: 'cardio'
    }
);

module.exports = Cardio;