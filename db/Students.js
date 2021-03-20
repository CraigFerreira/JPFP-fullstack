const {Sequelize, DataTypes}= require('sequelize');
const conn= require('./db')

const Students= conn.define('Students',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imgURL:{
        type: DataTypes.STRING,
        allowNull: false
    },
})

module.exports= Students