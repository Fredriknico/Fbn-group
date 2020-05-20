const express = require('express');
const router = express.Router();
const booking = require('./booking');

// API  MODULE
router.use('/storageapp', require('./StorageApp'));
// router.use('/', require('./frontend'));

router.use('/booking', booking);

module.exports = router;
