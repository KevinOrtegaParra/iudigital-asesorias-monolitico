const express = require('express');
const {obtenerUniversidad, crearUniversidad, actualizarUniversidad, eliminarUniversidad} = require('../controllers/UniversidadController');

const router = express.Router();

router.get('/', obtenerUniversidad);
router.post('/', crearUniversidad);
router.put('/:id', actualizarUniversidad);
router.delete('/:id', eliminarUniversidad);

module.exports = router;