const {Router} = require('express');
const { registrar, loguear, revalidar } = require('../controladores/auth');
const { check } = require('express-validator')
const { validarCampos } = require('../middleware/validator')
const {validarJWT} = require('../middleware/validar-token')

const router = Router();

//ruta raíz
router.get('/', (req, res) =>{
    res.send('Hello World')
});

router.post("/registro",
    [       
        check('nombre', 'el nombre no puede estar vacío').notEmpty(),
        check('email', 'debe ser un email valido').isEmail(),
        check('password', 'la contraseña debe tener al menos 8 caracteres').isLength({min : 8}),
        validarCampos
    ], 
    registrar);


router.post("/login",
    [
        check('email', 'debe ser un email válido').isEmail(),
        check('password', 'la contraseña debe tener al menos 8 caracteres').isLength({min : 8}),
        validarCampos
    ], 
    loguear)

router.get('/revalidar', validarJWT, revalidar)
module.exports = router