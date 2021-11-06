const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    hora: String,
    cliente: String,
    convenio: String,
    tipo: String,
    telefone: String,
}, {
    timestamps: true
});

const agendamentos = mongoose.model('Agendamentos', DataSchema);
module.exports = agendamentos;