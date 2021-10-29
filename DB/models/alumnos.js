const { Sequelize, DataTypes} = require('sequelize');
const db = require('../connection');
const matricula = require('./matricula')
const alumno = db.define('alumnos', {
    // Model attributes are defined here
    ID_ALUMNO: {
      type: DataTypes.INTEGER,
      primaryKey:true, 
      allowNull: false
    },
    NOMBRE: {
      type: DataTypes.STRING
    },
    APELLIDO: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
});

alumno.hasMany(matricula,{foreignKey:'ID_ALUMNO_MATRICULA', sourceKey: 'ID_ALUMNO'});
matricula.belongsTo(alumno,{foreignKey:'ID_ALUMNO_MATRICULA', sourceKey: 'ID_ALUMNO'});
module.exports = alumno;