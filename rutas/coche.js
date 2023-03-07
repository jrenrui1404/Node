const {Router} = require('express');
const { check } = require('express-validator')
const { validarCampos } = require('../middleware/validator')
const {validarJWT} = require('../middleware/validar-token');
const { crearCoche, listarCoches, actualizaCoche, eliminaCoche } = require('../controladores/coche');

const router = Router();

router.get('/', (req, res) =>{
    res.send('Hello World')
});


router.post("/crearCoche",
    [       
        check('bastidor', 'El bastido no puede estar vacío').notEmpty(),
        check('marca', 'La marca no puede estar vacía').notEmpty(),
        check('modelo', 'El modelo no puede estar vacío').notEmpty(),
        validarCampos
    ], 
    crearCoche);


router.post("/listarCoches",
    [
        check('bastidor', 'El bastido no puede estar vacío').notEmpty(),
        validarCampos
    ], 
    validarJWT, listarCoches);

router.put("/actualizaCoche/:bastidor",
    [
        check('marca', 'La marca no puede estar vacía').notEmpty(),
        check('modelo', 'El modelo no puede estar vacío').notEmpty(),
        validarCampos
    ],
    validarJWT, actualizaCoche);

router.delete("/eliminaCoche/:bastidor",
    [
        validarCampos
    ],
    eliminaCoche);

//router.get('/revalidar', validarJWT, revalidar)
module.exports = router