const app = require('./app');
const serverless = require('serverless-http');

// Wrap our express server with serverless so it can be put inside a lambda function in AWS
module.exports.handler = serverless(app);
