var express = require('express'),
db = require('./models'),
bodyParser = require('body-parser'),
path = require('path'),
views,
controllers = require('./controllers');
app = express();

// views = path.join(process.cwd(), '/views');

/*Configuration*/

/*Ports*/
app.set('port',(process.env.PORT || 3000));

/*Dependecies .js & .css files + vendor files*/
app.use('/static', express.static(__dirname +'/public'));
app.use('/vendor', express.static(__dirname + '/bower_components'));

/*Body Parser*/
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

 app.get('/', function (req, res){

 	res.sendFile(__dirname + '/views/index.html');


 });


 /*
 * JSON API Endpoints
 */

app.get('/api', controllers.api.index);

app.get('/api/albums', controllers.albums.index);

app.post('/api/albums', controllers.albums.create);


/**********
 * SERVER *
 **********/

/*App listen port 3000*/

app.listen(app.get('port'), function(){
	console.log("Albums-app Listening at Port 3000");
})