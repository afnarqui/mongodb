var mongoose = require('mongoose');

var loginSchema = new mongoose.Schema({
  correo: String,
  contrasena: String,
  token: String
});

module.exports = mongoose.model('login', loginSchema);

