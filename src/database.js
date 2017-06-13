'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-todo', function(err){
	
	if(err){
		var msg = 'Failed connectiong to Mongodb!';
		printStatus(msg);
	}else{
		var msg = 'Successfuly connected to Mongodb!';
		printStatus(msg);
	}
});

function printStatus(str){
	console.log(str);
}