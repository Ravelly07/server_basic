const { Router } = require('express');
const router = Router();

//controller
const insertAlumno = require('../controller/alumnos.controler')
//  /api/alumno
router.post('/', insertAlumno);


module.exports = router;