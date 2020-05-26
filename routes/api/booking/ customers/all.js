const express = require('express');
const db = require('../../../../database/nicobu');
const router = express.Router();

// Select all storage items
router.get('/', (req, res) => {
  let sql = 'SELECT * FROM customers';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Items fetched');
    res.send(result);
  });
});

module.exports = router;
