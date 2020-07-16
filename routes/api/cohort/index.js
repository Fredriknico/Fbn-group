﻿const express = require('express');
const api = express.Router();
const add = require('./add');
const all = require('./all');
const edit = require('./edit');
const deleteC = require('./delete');

// GET ALL ITEMS
api.use('/all', all);

// ADD ITEM
api.use('/add', add);

// DELETE ITEM
api.use('/delete', deleteC);

// EDIT ITEM
api.use('/edit', edit);

module.exports = api;
