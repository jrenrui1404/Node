const {Schema, model} = require('mongoose');


const UsuarioSchema = Schema({
    nombre: {
        type : String,
        require: true
    },
    email : { 
        type: String,
        require: true,
        uniquie: true,
    },
    password : {
        type: String,
        require: true
    }
})

const Usuario = model('Usuario', UsuarioSchema)

module.exports = Usuario