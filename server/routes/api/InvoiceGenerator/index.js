const express = require('express');
const api = express.Router();
const users = require('./users');
const createUser = require('./create_user');

// GET ALL ITEMS
api.use('/users', users);

api.use('/create_user', createUser);

module.exports = api;
