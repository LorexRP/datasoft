var express = require('express');//guarda express que nosotros intalamos

var bodyParser = require('body-parser'), port = 3000;//rmanejo de cuerpo de la "pagina" y puerto

var http = require('http');//protocolo de intercambio de archivos

var path = require('path');//direccion

var conectado = require('./src/conexion/index');

var catalogos = require('./src/rutas/catalogosRuta');//ruta

var encargados = require('./src/rutas/encargadosRuta'); // ruta

var contactos = require('./src/rutas/contactosRuta'); // ruta

var productos = require('./src/rutas/productosRuta'); // ruta

var materiales =  require('./src/rutas/materialesRuta'); // ruta

var produccion = require('./src/rutas/produccionRuta'); // ruta

var detalleProducto = require('./src/rutas/detallesproductosRuta'); // ruta

var app = express();//recibe un constructor

// todos los entornos

app.set('port', process.env.PORT || port);//metodo para recibir puerto y proceso

app.use(bodyParser.json({type: 'application/json', limit: '10mb'}));//recibe un cuerpo y un objeto json

app.use(bodyParser.urlencoded({extended: false}));//recibe url codificada

app.use(express.static(path.join(__dirname, 'public')));//recibe direccion

//================================================================

//app.use('../tipdoc', tipdoc(),function (req, res, next);
app.use(function (req, res, next)
{

// Stio web al que desea permitir que se conecte

res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

// A que métodos que desea dar permisos

res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

// A que encabezados se les va a dar permiso

res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//Establezca en verdadero si necesita que el sitio web incluya cookies en las solicitudes enviadas

//a la API (por ejemplo, en caso de que use sesiones)

res.setHeader('Access-Control-Allow-Credentials', true);

// Pase a la siguiente capa de middleware

next();

});

//============================================================

app.use('/catalogos', catalogos());//ruta para el servicio
app.use('/encargados', encargados());//ruta para el servicio
app.use('/contactos', contactos()); // ruta para el servicio
app.use('/productos', productos()); // ruta para el servicio
app.use('/materiales', materiales());
app.use('/produccion', produccion());
app.use('/detallesProductos', detalleProducto());

http.createServer(app).listen(app.get('port'), function ( )

{

console.log('Servidor Express escuchando por el puerto ' + app.get('port'));

});

module.exports = app;