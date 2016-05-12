var express = require('express'),
db = require('./models'),
bodyParser = require('body-parser'),
path = require('path'),
app = express()

app.set('port',(process.env.PORT || 3000));





app.listen(app.get('port'), function(){
	console.log("Albums-app Listening at Port 3000");
})