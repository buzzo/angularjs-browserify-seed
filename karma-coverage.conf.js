// workaround to make instanbul (from karma-coverage) work with browserify
var cover = require('browserify-istanbul');

module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'app/modules/**/*.js',
            'test/unit/modules/**/*.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine', 'browserify'],

        browsers: ['Chrome'],

        browserify: {
            watch: true,
            debug: true,
            configure: function (bundle) {
                bundle.on('prebundle', function () {
                    bundle
                        .transform(cover);
                });
            }
        },

        preprocessors: {
            'test/**/*.js': ['browserify'],
            'app/**/*.js': ['browserify']
        },

        coverageReporter: {
            type: "text"
        },

        reporters: ['progress', 'coverage'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-browserify',
            'karma-coverage'
        ]

    });
};
