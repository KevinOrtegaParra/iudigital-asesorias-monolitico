const mongoose = require('mongoose');

const clienteSchema = mongoose.Schema({

    Nombre: {
        type: String,
        require: true
    },
    Email:{
        type: String,
        require: true,
        unique: [true,"Ya existe"]
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

module.exports = mongoose.model('Cliente', clienteSchema);