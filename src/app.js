'use strict';

// require
var express = require('express');
var router = require('./api');

// instantiate
var app = express();

//serve static files from
app.use('/', express.static('public'));
app.use('/api', router);

app.listen(3000, function(){
	console.log("The server is running on port 3000");
});

