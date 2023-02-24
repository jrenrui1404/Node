//console.log("Hello World por poner algo!");

//console.log("Api REST");

const express = require('express')
const router = require('./rutas/auth')
require("dotenv").config()
const auth = require('./rutas/auth')
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
  res.send('Hello World MIL MARAVILLAS')
})*/}
app.use('/api/user', auth)

const PORT = process.env.PORT || 3000 

app.listen(PORT), () => {
console.log("El servidor está corriendo en el puerto 3000")
}

//voy por el video 6