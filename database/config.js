const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const conexion = async () => {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('servidor corriendo en el puerto 3000');
        console.log('conectado a la DB');
    }catch(error){
        console.log(error);
        throw Error('Error en la conexion a la BD');
    }
} 

module.exports = { conexion }