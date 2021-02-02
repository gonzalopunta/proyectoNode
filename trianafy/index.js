app = express();

mongoose.connect('mongodb://localhost/listaReproduccion', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

var model = require('./models/ListaReproduccion')(app, mongoose);
var ListaReproduccionController = require('./controllers/ListaReproduccion');

var listaReproduccion = express.Router();

listaReproduccion.route('/listaReproduccion').get(ListaReproduccionController.findAllLists);

listaReproduccion.route('/listaReproduccion/:id').get(ListaReproduccionController.findListById)

listaReproduccion.post('/listaReproduccion/', ListaReproduccionController.addList)
listaReproduccion.put('/listaReproduccion/:id', ListaReproduccionController.updateList)
listaReproduccion.delete('/listaReproduccion/:id', ListaReproduccionController.deleteListById);



var model = require('./models/Cancion')(app, mongoose);
var CancionController = require('./controllers/Cancion');

var cancion = express.Router();

cancion.route('/cancion').get(ListaReproduccionController.findAllLists);

cancion.route('/cancion/:id').get(ListaReproduccionController.findListById)

cancion.post('/cancion/', CancionController.addList)
cancion.put('/cancion/:id', CancionController.updateList)
cancion.delete('/cancion/:id', CancionController.deleteListById);

app.listen(8080, function() {
    console.log("Conectado!!")
});