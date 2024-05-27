const mongoose = require('mongoose');

const universidadSchema = mongoose.Schema({

    Nombre: {
        type: String,
        require: true
    },
    Direccion:{
        type: String,
        require: true,
    },
    Telefono:{
        type: String,
        require: true,
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

module.exports = mongoose.model('Universidad', universidadSchema);