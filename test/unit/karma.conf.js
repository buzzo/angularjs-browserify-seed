'use strict';

module.exports = function (config) {
    config.set({

        basePath: '../../',

        files: [
            'test/unit/modules/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine', 'browserify'],

        browsers: ['Chrome'],

        browserify: {
            watch: true,
            debug: true,
            transform: ['browserify-css', 'brfs']
        },

        preprocessors: {
            'test/**/*.js': ['browserify'],
            'app/**/*.js': ['browserify']
        },

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-browserify'
        ]

    });
};
