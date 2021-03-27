const {Sequelize, DataTypes}= require('sequelize');
const conn= require('./db')

const Campus= conn.define('Campus',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
    },
    imgURL:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
    },
    numStudents:{
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: ''
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: ''
    }
})

module.exports= Campus