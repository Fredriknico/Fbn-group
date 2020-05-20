const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Auth
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    if (bearerHeader == 'pastMigr347') {
      next();
    } else {
      res.sendStatus(403);
    }

    req.token = bearerToken;
  } else {
    res.sendStatus(403);
  }
}

// API  MODULE
router.use('/api', verifyToken, require('./api'));

// router.use('/', require('./frontend'));

module.exports = router;
