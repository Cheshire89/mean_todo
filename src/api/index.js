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
router.post('/todos', function(req, res){
	var todo = req.body;
	Todo.create(todo, function(err, todo){
		if(err){
			return res.status(500).json({err: err.message});
		}
		res.json({'todo': todo, message: 'Todo Created'});
	});
});

// TODO: Add put route to update existing entries
router.put('/todos:id', function(req, res){
	var id = req.params.id;
	var todo = req.body;
	if(todo && todo._id !==id){
		return res.status(500).json({err: "Ids dont match!"});
	}
	Todo.create(todo, function(err, todo){
		if(err){
			return res.status(500).json({err: err.message});
		}
		res.json({'todo': todo, message: 'Todo Created'});
	});
});
// TODO: Add delete route to delete entries

module.exports = router;