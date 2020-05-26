const express = require('express');
const api = express.Router();
const selectAll = require('./all');
const addBooking = require('./insert');
const deleteBooking = require('./delete');
const singelBooking = require('./item');
const updateBooking = require('./updateitem');

// GET ALL ITEMS
api.use('/all', selectAll);

// INSERT ITEM
api.use('/add', addBooking);

// DELETE ITEM
api.use('/delete', deleteBooking);

// SELECT ITEM
api.use('/item', singelBooking);

// UPDATE ITEM
api.use('/update', updateBooking);

module.exports = api;
