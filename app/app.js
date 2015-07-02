require('angular/angular');
require('angular-route/angular-route');
require('angular-css');
require('angular-bootstrap');

// door3.css is from angular-css (adding style 'css' per route)
angular.module('app', ['ngRoute', 'ui.bootstrap', 'door3.css']).config(['$routeProvider', require('./routes')]);
