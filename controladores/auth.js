const {response} = require('express')
const bcrypt = require('bcryptjs');
const Usuario = require('../modelos/Usuario')
const salt = bcrypt.genSaltSync(10);

const registrar = async (req, res = response) =>{
    //const {nombre, email, password} = req.body 
    //const usuario = new Usuario(req.body)
    const {email, password} = req.body
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
        usuario.password = bcrypt.hashSync(password, salt)
        await usuario.save();
        return res.status(201).json({
                ok : true,
                mensaje: "registro",
                nombre: usuario.nombre,
                email: usuario.email
    })    
    } catch (error) {
        return res.status(500).json({
            ok: false,
            mensaje: 'Error en el servidor'
        })
    }    
}

const loguear = async (req, res = response) => {

    const {email, password} = req.body 
    try{
        let usuario = await Usuario.findOne({email})
        if (!usuario){
            return res.status(400).json({
                ok: false,
                mensaje : 'Usuario no existe en el BD'
            })
        }
        if (! bcrypt.compareSync(password, usuario.password)){
            return res.status(400).json({
                ok: false,
                mensaje : 'Credenciales erróneas'
            })
        }
        res.json({
            ok : true,
            mensaje: "Login",
            email,
            id: usuario.id
        })
    }catch {
        res.status(500).json({
            ok: false,
            mensaje: 'Error en el servidor'
        })
    }
    
}

module.exports = {
    registrar, loguear
}