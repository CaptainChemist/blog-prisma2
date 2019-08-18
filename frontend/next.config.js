const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  target: 'serverless',
  env: {
    BACKEND_URL: process.env.BACKEND_URL
  }
});
