require('env2')('.env');

const { join } = require('path');
const express = require('express');

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, '..', 'public')));

module.exports = app;
