const express = require('express');
const api = express.Router();
const selectAll = require('./all');
const insertItem = require('./insert');
const deleteItem = require('./delete');
const singelItem = require('./item');
const updateItem = require('./updateitem');
const createTable = require('./table');

// GET ALL ITEMS
api.use('/all', selectAll);

// INSERT ITEM
api.use('/insert', insertItem);

// DELETE ITEM
api.use('/delete', deleteItem);

// SELECT ITEM
api.use('/item', singelItem);

// UPDATE ITEM
api.use('/update', updateItem);

// CREATE TABLE
api.use('/creattable', createTable);

module.exports = api;
