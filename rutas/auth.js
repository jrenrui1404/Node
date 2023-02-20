const {Router, request} = require('express')
const { registrar, loguear} = require('../controladores/auth');
const {check} = request('express-validator')
const router = Router()

//ruta raíz
router.get('/', (req, res) =>{
    res.send('Hello World MIL MARAVILLAS')
})

router.post("/registro", 
    [
        check('nombre', 'el nombre no puede estar vacío').notEmpty(),
        check('email', 'email debe ser un email válido').isEmail(),
        check('password', 'la contraseña debe tener al menos 8 carácteres').isLength({min : 8})
    ],
registrar)

router.post("/login", loguear)

module.exports = router