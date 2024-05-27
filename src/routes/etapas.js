const express = require('express');
const {obtenerEtapas, crearEtapas, actualizarEtapas, eliminarEtapas} = require('../controllers/EtapasController');

const router = express.Router();

router.get('/', obtenerEtapas);
router.post('/', crearEtapas);
router.put('/:id', actualizarEtapas);
router.delete('/:id', eliminarEtapas);

module.exports = router;