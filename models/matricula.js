const { Sequelize, DataTypes} = require('sequelize');
const db = require('../DB/connection');

const matricula = db.define("matriculas", {
    // Model attributes are defined here
    ID_MATRICULA: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      allowNull: false
    },
    PARALELO: {
      type: DataTypes.CHAR
    },
    ID_ALUMNO_MATRICULA: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: false
});


module.exports = matricula;