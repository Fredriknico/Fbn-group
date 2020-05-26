const express = require('express');
const router = express.Router();

// API  MODULE
router.use('/storageapp', require('./StorageApp'));

// router.use('/booking', require('./booking'));

module.exports = router;
