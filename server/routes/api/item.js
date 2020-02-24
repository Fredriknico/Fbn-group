const express = require('express');
const db = require('../../database');
const router = express.Router();

// Select storage item
router.get('/:id', (req, res) => {
  let sql = `SELECT * FROM storage WHERE id =${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
