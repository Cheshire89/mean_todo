'use strict';

var express = require('express');
var router = express.Router();
var todos = require('../../mock/todos.json');

router.get('/todos' , function(req, res){
	res.json({todos: todos});
});

// TODO: Add post route to create new entries

// TODO: Add put route to update existing entries

// TODO: Add delete route to delete entries

module.exports = router;