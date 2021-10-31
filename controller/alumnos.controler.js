const alumno = require('../models/alumnos');

const showAllA = async (req, res) => {
    const tablaAlumnos = await alumno.findAll();
    res.status(200).send(tablaAlumnos);
    // res.json({
    //     data: tablaAlumnos
    // });
}

const insertAlumno = async (req, res) => {
    const { ID_ALUMNO, NOMBRE, APELLIDO } = req.body;
    try {
        let newAlumno = await alumno.create({
            ID_ALUMNO,
            NOMBRE,
            APELLIDO
        });
        if (newAlumno) {
            res.json({
                mensaje: 'Nuevo alumno registrado',
                data: newAlumno
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            mensaje: 'Algo ha ido mal',
            data: {}
        });
    }
};

const oneAlumno = async (req, res) => {
    const {posicion} = req.params;
    const valor = posicion - 1
    try {
        const tablaAlumnos = await alumno.findOne({
            limit:1,
            offset:valor 
        });
        if(tablaAlumnos){
            res.json({
                Data: tablaAlumnos
            });
        }else{
            res.status(500).send(`No existe el campo ${posicion}`);
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    showAllA,
    insertAlumno,
    oneAlumno
};