const express = require('express');
const api = express.Router();
const fruhaugans = require('./fruhaugans');

api.use('/fruhaugans', fruhaugans);

module.exports = api;
