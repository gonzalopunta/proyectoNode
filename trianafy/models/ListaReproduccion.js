exports = module.exports = function(app, mongoose) {

	var listaReproduccionSchema = new mongoose.Schema({
		id: 		    { type: String },
		name: 			{ type: Number },
		description: 	{ type: String },
		user_id:  		{ type: String },
		songs:  [{
                id: {type: String},
                title: {type: String},
                artist: {type: String},
                album: {type: String},
                year: {type: Number}
                }
    ]
	});

	mongoose.model('ListaReproduccion', listaReproduccionSchema);

};