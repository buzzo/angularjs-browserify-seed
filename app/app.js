require('angular/angular');
require('angular-route/angular-route');
require('angular-css');

angular.module('app', ['ngRoute', 'door3.css'])
    .config(require('./routes'));
