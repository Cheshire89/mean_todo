'use strict';

var express = require('express');
var router = express.Router();

router.get('/todos' , function(req, res){
	res.json({todos:[]});
});

// TODO: Add post route to create new entries

// TODO: Add put route to update existing entries

// TODO: Add delete route to delete entries

module.exports = router;