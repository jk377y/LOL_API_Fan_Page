const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Champion extends Model {}

Champion.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lore: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        skins: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        mainPic: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passiveName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        passiveDescription: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        passiveImage: {
            type: DataTypes.STRING,
            allowNull: false
        },
        spells: {
            type: DataTypes.JSON,
            allowNull: false
        },
        lane: {
            type: DataTypes.STRING,
            allowNull: true,
        }, 
        roles: {
            type: DataTypes.JSON,
            allowNull: true,
        },
    },
    {// define the configuration options for the Champion model
        sequelize,
        freezeTableName: true,
        underscored: false,
        modelName: 'champion',
    },
);

module.exports = Champion;