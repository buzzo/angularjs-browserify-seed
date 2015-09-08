'use strict';

var angular = require('angular');
require('angular-route/angular-route'); //ngRoute
require('angular-css'); // door3.css - adiciona o 'css' no routes do angular

var requires = [
    'ngRoute',
    'door3.css'
];

var app = angular.module('app', requires);

// configuracao
app.config(['$routeProvider', require('./config')]);

// teste e2e usa esta variavel
window.app = app;