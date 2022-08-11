const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PowerLifting extends Model { }

PowerLifting.init(
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
        modelName: 'powerLifting'
    }
);

module.exports = PowerLifting;