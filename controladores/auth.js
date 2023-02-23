const {response} = require('express')
const registrar = (req, res = response) =>{
    const {nombre, email, password} = req.body 
    return res.json({
            ok : true,
            mensaje: "registro",
            nombre,
            email,
            password
    })    
}

const loguear = (req, res = response) =>{
    const {email, password} = req.body 
    const errores = validationResult(req)
    console.log(errores);
    if (! errores.isEmpty()){
        return res.status(400).json({
            ok : false,
            mensaje : errores.mapped()
        }) 
    }
    res.json({
        mensaje: "login",
        email,
        password
    })    
}

module.exports = {
    registrar, loguear
}