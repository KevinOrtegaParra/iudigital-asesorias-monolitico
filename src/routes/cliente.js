const express = require('express');
const {obtenerCliente, crearCliente, eliminarCliente, actualizarCliente} = require('../controllers/ClienteController');

const router = express.Router();

router.get('/', obtenerCliente);
router.post('/', crearCliente);
router.put('/:id', actualizarCliente);
router.delete('/:id', eliminarCliente);

module.exports = router;