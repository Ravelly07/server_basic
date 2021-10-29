const { Sequelize } = require('sequelize');

const db = new Sequelize('local','dev','maxi2000sql',{
    host:'localhost',
    dialect: 'postgres',
    pool:{
        max:5,
        min:0,
        require: 30000,
        idle: 10000
    },
    //logging: false
});


module.exports = db;