const { Router } = require('express');
const router = Router();

//controller
const {insertMatricula, showAllM, oneMatricula} = require('../controller/matricula.controler')
//  /api/matricula
router.get('/',showAllM);
router.post('/agregar/', insertMatricula);

// /api/matricula/posición
router.get('/:posicion',oneMatricula );

module.exports = router;