const {Schema, model} = require('mongoose');


const CocheSchema = Schema({
    bastidor: {
        type : String,
        require: true
    },
    marca : { 
        type: String,
        require: true,
        uniquie: true,
    },
    modelo : {
        type: String,
        require: true
    }
})

const Coche = model('coche', CocheSchema)

module.exports = Coche