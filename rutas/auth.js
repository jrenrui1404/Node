const {Router} = require('express')
const { registrar, loguear} = require('../controladores/auth');
const router = Router()

//ruta raíz
router.get('/', (req, res) =>{
    res.send('Hello World MIL MARAVILLAS')
})

router.post("/registro", registrar)

router.post("/login", loguear)

module.exports = router