exports = module.exports = function(app, mongoose) {

	var userSchema = new mongoose.Schema({
        id: {type: String},
        nombreCompleto: {type: String},
        nombreUsuario: {type: String},
        email: {type: String},
        password: {type: String}
	});

	mongoose.model('Usuario', userSchema);

};