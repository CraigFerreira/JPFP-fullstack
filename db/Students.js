const {Sequelize, DataTypes}= require('sequelize');
const conn= require('./db')

const Students= conn.define('Students',{
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
    },
    imgURL:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
    },
    gpa:{
        type: DataTypes.DECIMAL,
        defaultValue: 0
    }
})

module.exports= Students