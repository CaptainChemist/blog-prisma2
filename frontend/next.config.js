const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  target: 'serverless',
  env: {
    BACKEND_URL: process.env.BACKEND_URL
  },
  webpackDevMiddleware: (config) => {
    // Solve compiling problem via vagrant
    config.watchOptions = {
      poll: 1000,   // Check for changes every second
      aggregateTimeout: 300,   // delay before rebuilding
    };
    return config;
  }
});
