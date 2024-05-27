const express = require('express');
const {obtenerTipoProyecto, crearTipoProyecto, actualizarTipoProyecto, eliminarTipoProyecto} = require('../controllers/TipoProyectoController');

const router = express.Router();

router.get('/', obtenerTipoProyecto);
router.post('/', crearTipoProyecto);
router.put('/:id', actualizarTipoProyecto);
router.delete('/:id', eliminarTipoProyecto);

module.exports = router;