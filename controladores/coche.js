const {response} = require('express')
const Coche = require('../modelos/coche')

//creamos un coche
const crearCoche = async (req, res = response) =>{
    
    const {bastidor} = req.body

    try{
        let coche = await Coche.findOne({bastidor})
        //console.log(coche)
        if (coche){
            return res.status(400).json({
                ok: false,
                mensaje : 'Este coche ya existe en el Base de Datos'
            })
        }
        coche = new Coche(req.body)
        //guardamos el coche
        await coche.save()
        
        return res.status(201).json({
                ok : true,
                mensaje: "crearCoche",
                bastidor: coche.bastidor,
                marca: coche.marca,
                modelo: coche.modelo
    })    
    } catch (error) {
        return res.status(500).json({
            ok: false,
            mensaje: 'Error en el servidor'
        })
    }    
}

//listamos
const listarCoches = async (req, res = response) => {

    const {bastidor} = req.body 
    try{
        let coche = await Coche.findOne({bastidor})
        if (!coche){
            return res.status(400).json({
                ok: false,
                mensaje : 'Este coche no existe en el base de datos'
            })
        }
        
        return res.json({
            ok : true,
            mensaje: "Listar coches",
            id: coche.id,
            bastidor,
            marca: coche.marca,
            modelo: coche.modelo
        })
    }catch {
        res.status(500).json({
            ok: false,
            mensaje: 'Error en el servidor'
        })
    }
    
}

const actualizaCoche = async (req, res = response) => {

    const { bastidor } = req.params;
    const { marca, modelo } = req.body;

    try{

        await Coche.updateOne(
            { bastidor: bastidor },
            { $set: { marca, modelo }}
        );

        return res.json({
            mensaje: 'Coche actualizado',
            bastidor: bastidor
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            mensaje: 'Error en el servidor'
        })
    }
}


const eliminaCoche = async (req, res = response) => {

    const { bastidor } = req.params;
    const { marca, modelo } = req.body;

    try{

        await Coche.deleteOne(
            { bastidor: bastidor },
            { $set: { marca, modelo }}
        );

        return res.json({
            mensaje: 'Coche eliminado',
            bastidor: bastidor
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            mensaje: 'Error en el servidor'
        })
    }
}

module.exports = {
    crearCoche, listarCoches, actualizaCoche, eliminaCoche
}