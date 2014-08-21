var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(__dirname + (process.env.STATIC_DIR || '/build')));

var port = process.env.PORT || 3000;
exports.port = port;

require('./routes')(app);

var server = http.createServer(app);

server.listen(port, function() {
	console.log('Lookin legit on port ' + port);
});