'use strict';

var angular = require('angular');

angular.module('todoListApp', []);

//Controllers
require('./scripts/controllers/main.js');
require('./scripts/controllers/todo.js');

//Directives
require('./scripts/directives/todo.js');

//Services
require('./scripts/services/data.js');
