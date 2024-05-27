const mongoose = require('mongoose');

const tipoProyectoSchema = mongoose.Schema({

    Nombre: {
        type: String,
        unique: [true,'Ya existe'],
        require: true
    },
    FechaCreacion: {
        type: Date,
        default: new Date()
    },
    FechaActualizacion: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('TipoProyecto', tipoProyectoSchema);