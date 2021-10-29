const { Sequelize, DataTypes} = require('sequelize');
const db = require('../connection');

const matricula = db.define('matricula', {
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