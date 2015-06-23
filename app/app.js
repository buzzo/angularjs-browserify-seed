require('angular/angular');
require('angular-route/angular-route');
require('angular-css');

// door3.css is from angular-css (adding style 'css' per route)
angular.module('app', ['ngRoute', 'door3.css'])
    .config(require('./routes'));
