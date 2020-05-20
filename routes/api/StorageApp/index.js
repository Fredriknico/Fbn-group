const express = require('express');
const router = express.Router();

// API  MODULE
router.use('/hsb', require('./hsb'));
// router.use('/', require('./frontend'));

module.exports = router;
