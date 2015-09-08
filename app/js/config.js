'use strict';

var fs = require('fs');

module.exports = function ($routeProvider) {
    // route do angular
    $routeProvider
        .when('/dashboard', {
            controller: ['$scope', require('./modules/dashboard/dashboard.js')],
            template: fs.readFileSync(__dirname + '/modules/dashboard/dashboard.html', 'utf-8'),
            css: require('./modules/dashboard/dashboard.css')
        })
        // outras rotas
        .otherwise({
            redirectTo: '/dashboard'
        });

    // outras configuracoes do angular (se necessario)
};
