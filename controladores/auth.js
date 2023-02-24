const {response} = require('express')
const Usuario = require('../modelos/Usuario')

const registrar = async (req, res = response) =>{
    //const {nombre, email, password} = req.body 
    const usuario = new Usuario(req.body)
    await usuario.save
    return res.json({
            ok : true,
            mensaje: "registro",
            nombre: usuario.nombre,
            email: usuario.email
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