var express = require('express'),
app = express(),
bodyParser = require('body-parser');

var port = process.env.PORT || 3000;





app.listen(port, function(){
	console.log("Albums-app Listening at Port 3000");
})