var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 4568;

var app = express();

var router = express.Router();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../scripts'));

app.listen(port, function() {
  console.log('Listening on port ' + port + '!');
});