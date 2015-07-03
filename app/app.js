require('angular/angular');
require('angular-route/angular-route');
require('angular-css');
require('angular-bootstrap');
require('angular-grid');

// door3.css is from angular-css (adding style 'css' per route)
angular.module('app', ['ngRoute', 'door3.css', 'ui.bootstrap', 'angularGrid']).config(['$routeProvider', require('./routes')]);
