const express = require('express');
const api = express.Router();
const selectAll = require('./all');
const insertItem = require('./insert');
const deleteItem = require('./delete');
const singelItem = require('./item');
const updateItem = require('./updateitem');
const uploads = require('./uploads');

// GET ALL ITEMS
api.use('/bookings', selectAll);

// INSERT ITEM
api.use('/insert', insertItem);

// DELETE ITEM
api.use('/delete', deleteItem);

// SELECT ITEM
api.use('/item', singelItem);

// UPDATE ITEM
api.use('/update', updateItem);

// IMAGES
api.use('/uploads', uploads);

module.exports = api;
