const Universidad = require('../models/universidad');
const { request, response } = require('express');

const obtenerUniversidad = async (req = request, res = response) => {
    try {
        const universidad = await Universidad.find();
        return res.json(universidad);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const crearUniversidad = async (req = request, res = response) => {
    try {
        const body = req.body;
        const universidad = new Universidad(body);
        await universidad.save();
        return res.status(201).json(universidad);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const actualizarUniversidad = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        body.FechaActualización = new Date();
        const universidad = await Universidad.findByIdAndUpdate(id, body, {new: true});

        return res.status(201).json(universidad);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const eliminarUniversidad = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        await Universidad.findByIdAndDelete(id);

        return res.status(204).json({
            message:'Borrado'
        });

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

module.exports = ({
    obtenerUniversidad,
    crearUniversidad,
    actualizarUniversidad,
    eliminarUniversidad
})