const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({ limit: '1mb' }));

// Bootstrap the application routes
require('./routes')(app);

module.exports = app;
