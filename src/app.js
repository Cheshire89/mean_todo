'use strict';

debugger;

// require
var express = require('express');
var parser = require('body-parser');
var router = require('./api');

// instantiate
var app = express();

require('./database');
// require('./seed');


//serve static files from
app.use('/', express.static('public'));
app.use(parser.json());
app.use('/api', router);

app.listen(3000, function(){
	console.log("The server is running on port 3000");
});

