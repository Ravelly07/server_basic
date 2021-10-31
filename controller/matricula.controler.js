const matricula = require('../models/matricula');

const showAllM = async(req,res) =>{
    const tablaMatricula = await matricula.findAll();
    res.status(200).send(tablaMatricula);
    // res.json({
    //     data: tablaMatricula
    // });
}

const insertMatricula = async(req,res) =>{
    const {ID_MATRICULA,PARALELO,ID_ALUMNO_MATRICULA} = req.body;
    try {
        let newMatricula = await matricula.create({
            ID_MATRICULA,
            PARALELO,
            ID_ALUMNO_MATRICULA
        });
        if(newMatricula){
            res.json({
            mensaje: 'Nueva matricula registrada',
            data: newMatricula
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

const oneMatricula = async (req, res) => {
    const {posicion} = req.params;
    const valor = posicion - 1
    try {
        const tablaMatricula = await matricula.findOne({
            limit:1,
            offset:valor 
        });
        if(tablaMatricula){
            res.json({
                Data: tablaMatricula
            });
        }else{
            res.status(500).send(`No existe el campo ${posicion}`);
        }
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    insertMatricula,
    showAllM,
    oneMatricula
};