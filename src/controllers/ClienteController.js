const Cliente = require('../models/cliente');
const { request, response } = require('express');

const obtenerCliente = async (req = request, res = response) => {
    try {
        const cliente = await Cliente.find();
        return res.json(cliente);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const crearCliente = async (req = request, res = response) => {
    try {
        const body = req.body;
        const cliente = new Cliente(body);
        await cliente.save();
        return res.status(201).json(cliente);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const actualizarCliente = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        const body = req.body;
        body.FechaActualización = new Date();
        const cliente = await Cliente.findByIdAndUpdate(id, body, {new: true});

        return res.status(201).json(cliente);

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

const eliminarCliente = async (req = request, res = response) => {
    try {
        const id = req.params.id;
        await Cliente.findByIdAndDelete(id);

        return res.status(204).json({
            message:'Borrado'
        });

    } catch (error) {
        return res.status(500).json({ message: error });
    }
}

module.exports = ({
    obtenerCliente,
    crearCliente,
    actualizarCliente,
    eliminarCliente
})