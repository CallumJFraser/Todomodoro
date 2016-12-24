var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    basePath: '.',
    frameworks: ['mocha', 'chai'],
    files: [
        './test/assets/scripts/**/*.js'
    ],
    webpack: webpackConfig,
    webpackServer: {
        noInfo: true
    },
    preprocessors: {
        './test/assets/scripts/**/*.js': ['webpack']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: true,
    concurrency: Infinity
  })
}
