const mongoose = require('mongoose');

const etapasSchema = mongoose.Schema({

    Nombre: {
        type: String,
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

module.exports = mongoose.model('Etapas', etapasSchema);