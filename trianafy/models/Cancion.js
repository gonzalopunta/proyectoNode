exports = module.exports = function(app, mongoose) {

	var cancionSchema = new mongoose.Schema({
        id: {type: String},
        title: {type: String},
        artist: {type: String},
        album: {type: String},
        year: {type: Number}
	});

	mongoose.model('Cancion', cancionSchema);

};