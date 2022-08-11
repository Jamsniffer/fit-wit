const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Calisthenics extends Model { }

Calisthenics.init(
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
        modelName: 'calisthenics'
    }
);

module.exports = Calisthenics;