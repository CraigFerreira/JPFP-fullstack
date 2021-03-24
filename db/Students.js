const {Sequelize, DataTypes}= require('sequelize');
const conn= require('./db')

const Students= conn.define('Students',{
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imgURL:{
        type: DataTypes.STRING,
        allowNull: false
    },
    gpa:{
        type: DataTypes.DECIMAL
    }
})

module.exports= Students