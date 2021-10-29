const { Router } = require('express');
const router = Router();

//controller
const {insertAlumno,showAllA, oneAlumno} = require('../controller/alumnos.controler')
//  /api/alumno
router.get('/', showAllA);
router.post('/agregar/', insertAlumno);

//api/alumno/:posición
router.get('/:posicion', oneAlumno);

module.exports = router;