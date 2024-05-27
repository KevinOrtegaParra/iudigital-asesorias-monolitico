const TipoProyecto = require('../models/tipoProyecto');
const { request, response } = require('express');
const { patch } = require('../routes/cliente');

const obtenerTipoProyecto = async (req = request, res = response) => {
    try {
        const tipoProyecto = await TipoProyecto.find()
        return res.json(tipoProyecto);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const crearTipoProyecto = async (req = request, res = response) => {
    try {
        const body = req.body;
        const tipoProyecto = new TipoProyecto(body);
        await tipoProyecto.save();
        return res.status(201).json(tipoProyecto);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const actualizarTipoProyecto = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        body.FechaActualización = new Date();
        const tipoProyecto = await TipoProyecto.findByIdAndUpdate(id, body, {new: true});

        return res.status(201).json(tipoProyecto);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const eliminarTipoProyecto= async (req = request, res = response) => {
    try {
        const id = req.params.id;
        await TipoProyecto.findByIdAndDelete(id);

        return res.status(204).json({
            message:'Borrado'
        });

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

module.exports = ({
    obtenerTipoProyecto,
    crearTipoProyecto,
    actualizarTipoProyecto,
    eliminarTipoProyecto
})