const express = require('express');
const router = express.Router();

// API  MODULE
router.use('/storageapp', require('./StorageApp'));

router.use('/booking', require('./booking'));

router.use('/cohort', require('./cohort'));

module.exports = router;
