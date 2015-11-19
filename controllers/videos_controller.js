var models = require('../models/miModelo.js');

exports.index = function(req, res) {
  models.Videos.findAll().then(function(listado) {
    res.render('videos.ejs', { listado: listado});
  })
};

exports.index1 = function(req, res) {
  models.Videos.findAll().then(function(listado) {
    res.render('videos1.ejs', { listado: listado});
  })
};

exports.index2 = function(req, res) {
  models.Videos.findAll().then(function(listado) {
    res.render('videos1.ejs', { listado: listado});
  })
};