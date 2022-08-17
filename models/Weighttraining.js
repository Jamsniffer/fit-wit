const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Weighttraining extends Model { }

Weighttraining.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    exercise_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    sets: {
      type: DataTypes.INTEGER,
      defaultValue: 3,
    },
    reps: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 30,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "weighttraining",
  }
);

module.exports = Weighttraining;