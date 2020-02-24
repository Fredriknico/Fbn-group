const express = require('express');
const router = express.Router();

// API  MODULE
router.use('/api', require('./api'));
// router.use('/', require('./frontend'));

module.exports = router;
