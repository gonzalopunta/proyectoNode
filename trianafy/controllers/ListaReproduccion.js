var mongoose = require('mongoose');
var ListaReproduccion = mongoose.model('ListaReproduccion');

exports.findAllLists = function (req, res){
    ListaReproduccion.find(function (err, lista){
        if(err) res.send(400, err.message);

		res.status(200).json(lista);
	});
};

exports.findListById = function(req, res) {
	ListaReproduccion.findById(req.params.id, function(err, lista) {
    if(err) return res.send(404, err.message);

		res.status(200).json(lista);
	});
};

exports.addList = function(req, res) {

	var listaReproduccion = new ListaReproduccion({
		id:             req.body.id,
		name: 	        req.body.name,
		description:    req.body.description,
		user_id:        req.body.user_id,
		songs:           req.body.songs
	});

	listaReproduccion.save(function(err, listaReproduccion) {
		if(err) return res.send(400, err.message);
    res.status(201).json(listaReproduccion);
	});
};

exports.updateList = function(req, res) {
	ListaReproduccion.findById(req.params.id, function(err, listaReproduccion) {
		listaReproduccion.name          =   req.body.name;
		listaReproduccion.description   =   req.body.description;
		listaReproduccion.user_id       =   req.body.user_id;
		listaReproduccion.songs         =   req.body.songs;

		listaReproduccion.save(function(err) {
			if(err) return res.send(404, err.message);
      res.status(204).json(listaReproduccion);
		});
	});
};

exports.deleteListById = function(req, res) {
	ListaReproduccion.findById(req.params.id, function(err, listaReproduccion) {
		listaReproduccion.remove(function(err) {
			if(err) return res.send(404, err.message);
      res.status(204);
		})
	});
};