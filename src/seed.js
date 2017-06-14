'use strict';

var Todo = require('./models/todo.js');

var todos = [
	'Feed the dog',
	'Swim for an hour',
	'Water the plants'
];

todos.forEach(function(todo, index){
	Todo.find({'name': todo}, function(err, todos){
		if(!err && !todos.length){
			Todo.create({completed:false, name: todo});
		}
	})
});
