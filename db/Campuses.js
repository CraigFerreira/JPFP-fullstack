const {Sequelize, DataTypes}= require('sequelize');
const conn= require('./db')

const Campus= conn.define('Campus',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imgURL:{
        type: DataTypes.STRING,
        allowNull: false
    },
    numStudents:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

module.exports= Campus