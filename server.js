var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();

// API file to interacting with mongoDB 
var api = require('./server/routes/api');

// Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/',api);

// Send all other requests to Angular app
app.get('*'), (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
}

// Set Port 
var port = process.env.PORT || '3000';
app.set('port', port);

// Create a server 
var server = http.createServer(app);
server.listen(port, () => console.log('Server is running!:' + port));
