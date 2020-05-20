const express = require('express');
const router = express.Router();

// HSB STORAGE
router.use('/storage', require('./storage'));

module.exports = router;
