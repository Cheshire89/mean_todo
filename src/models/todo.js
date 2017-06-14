'use strict';

var mangoose = require('mongoose');

//todo.name
//todo.completed

var todoSchema = new mangoose.Schema({
	name: String,
	completed: Boolean
});

var todoModel = mangoose.model('Todo', todoSchema);

module.exports = todoModel;