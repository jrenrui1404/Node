const {response} = require('express')

const registrar = (req, res = response) =>{
    const {nombre, email, password} = req.body 
    if (password.length < 8) {
        return res.status(400).json({
            ok: false,
            mensaje: "la contraseña debe tener mínimo 8 caracteres"
        })
    }

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
    res.json({
        mensaje: "login",
        email,
        password
    })    
}

module.exports = {
    registrar, loguear
}