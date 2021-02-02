var mongoose = require('mongoose');
var Cancion = mongoose.model('Cancion');

exports.findAllCancion = function (req, res){
    Cancion.find(function (err, lista){
        if(err) res.send(400, err.message);

		res.status(200).json(lista);
	});
};

exports.findCancionById = function(req, res) {
	Cancion.findById(req.params.id, function(err, cancion) {
    if(err) return res.send(404, err.message);

		res.status(200).json(cancion);
	});
};

exports.addCancion = function(req, res) {

	var cancion = new Cancion({
		id:             req.body.id,
		title: 	        req.body.title,
		artist:         req.body.artist,
		album:          req.body.album,
		year:           req.body.year
	});

	cancion.save(function(err, cancion) {
		if(err) return res.send(400, err.message);
    res.status(201).json(cancion);
	});
};

exports.updateCancion = function(req, res) {
	Cancion.findById(req.params.id, function(err, cancion) {
		cancion.title    =   req.body.title;
		cancion.artist   =   req.body.artist;
		cancion.album    =   req.body.album;
		cancion.year     =   req.body.year;

		cancion.save(function(err) {
			if(err) return res.send(404, err.message);
      res.status(204).json(cancion);
		});
	});
};

exports.deleteListById = function(req, res) {
	Cancion.findById(req.params.id, function(err, cancion) {
		cancion.remove(function(err) {
			if(err) return res.send(404, err.message);
      res.status(204);
		})
	});
};