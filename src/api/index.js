'use strict';

var express = require('express');
var router = express.Router();
var Todo = require('../models/todo');
//var todos = require('../../mock/todos.json');

router.get('/todos' , function(req, res){
	Todo.find({}, function(err, todos){
		if(err){
			return res.status(500).json({message: err.message});
		}else{
			res.json({todos: todos});
		}
		
	});
});

// TODO: Add post route to create new entries

// TODO: Add put route to update existing entries

// TODO: Add delete route to delete entries

module.exports = router;