"use strict"
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')

var app = express()
var datos = require('./datos.js')
var login = require('./login.js')

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var bd;

bd = mongoose.connect("mongodb://localhost:27017/prueba", {
  useMongoClient: true,
});

mongoose.connection.on('connected', function () {
  console.log('mongoose conectado')
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.post('/datos', function(req, res, next) {
    
    datos.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  app.post('/login', function(req, res, next) {
    login.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

  app.get('/login', function(req, res, next) {
    login.find(function (err, login) {
      if (err) return next(err);
      res.json(login);
    });
  });


app.listen(8989, () => console.log(` servidor corriendo por el puerto 8989`))







