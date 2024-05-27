const Etapas = require('../models/etapas');
const { request, response } = require('express');

const obtenerEtapas = async (req = request, res = response) => {
    try {
        const { Estado } = req.query;
        const etapas = await Etapas.find();
        return res.json(etapas);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const crearEtapas = async (req = request, res = response) => {
    try {
        const body = req.body;
        const etapas = new Etapas(body);
        await etapas.save();
        return res.status(201).json(etapas);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const actualizarEtapas = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        body.FechaActualización = new Date();
        const etapas = await Etapas.findByIdAndUpdate(id, body, {new: true});

        return res.status(201).json(etapas);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const eliminarEtapas = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        await Etapas.findByIdAndDelete(id);

        return res.status(204).json({
            message:'Borrado'
        });

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

module.exports = ({
    obtenerEtapas,
    crearEtapas,
    actualizarEtapas,
    eliminarEtapas
})