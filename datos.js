var mongoose = require('mongoose');

var datosSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  direccion: String,
  edad: Number,
  fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model('datos', datosSchema);


