const express = require('express');
const router = express.Router();

// API  MODULE
router.use('/customers', require('./customers'));
// router.use('/', require('./frontend'));

router.use('/bookings', require('./bookings'));

module.exports = router;
