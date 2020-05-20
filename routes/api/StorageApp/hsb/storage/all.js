const express = require('express');
const db = require('../../../../../database/nicobu');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Auth
// function verifyToken(req, res, next) {
//   const bearerHeader = req.headers['authorization'];

//   if (typeof bearerHeader !== 'undefined') {
//     res.sendStatus(200);
//   } else {
//     res.sendStatus(403);
//   }
// }

// Select all storage items
router.get('/', (req, res) => {
  let sql = 'SELECT * FROM storage';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Items fetched');
    res.send(result);
  });
});

module.exports = router;
