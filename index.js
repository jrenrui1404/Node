//console.log("Hello World por poner algo!");

//console.log("Api REST");

const express = require('express')

require("dotenv").config()
const auth = require('./rutas/auth')
const coche = require('./rutas/coche')

const { conexion } = require('./database/config')
//console.log(process.env.PORT)

//conexion a la BD
conexion()

//creación del servidor
const app = express()

//permitir escritura y lectura en json
app.use(express.json())

//ruta raíz
{/*app.get('/', function (req, res) {
  res.send('Hello World')
})*/}

app.use('/api/user', auth)
app.use('/api/car', coche)


const PORT = process.env.PORT || 3000 

app.listen(PORT), () => {
console.log("El servidor está corriendo en el puerto 3000")
}

//voy por el video 6