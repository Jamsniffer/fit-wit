const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Calisthenics extends Model { }

Calisthenics.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        exercise_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING
        },
        sets: {
            type: DataTypes.INTEGER,
            defaultValue: 3
        },
        reps: {
            type: DataTypes.INTEGER,
            defaultValue: 10
        },
        weight: {
            type: DataTypes.INTEGER,
            defaultValue: 30
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'calisthenics'
    }
);

module.exports = Calisthenics;