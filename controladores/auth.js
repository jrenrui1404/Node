const {response} = require('express')
const Usuario = require('../modelos/Usuario')

const registrar = async (req, res = response) =>{
    //const {nombre, email, password} = req.body 
    //const usuario = new Usuario(req.body)
    const {email} = req.body
    try{
        let usuario = await Usuario.findOne({email})
        //console.log(usuario)
        if (usuario){
            return res.status(400).json({
                ok: false,
                mensaje : 'usuario ya existe en el BD'
            })
        }
        usuario = new Usuario(req.body)
        await usuario.save
        return res.status(201).json({
                ok : true,
                mensaje: "registro",
                nombre: usuario.nombre,
                email: usuario.email
    })    
    } catch (error) {
        return res.status(500).json({
            ok: false,
            mensaje: 'error en el servidor'
        })
    }    
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