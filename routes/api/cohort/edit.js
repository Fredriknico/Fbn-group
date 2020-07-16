﻿const express = require('express');
const db = require('../../../database/nicobu');
const router = express.Router();

// Update storage item
router.post('/:id', (req, res) => {
  let sql = `
  UPDATE cohort SET
  phone='${req.body.phone}',
  time='${req.body.time}',
  status='${req.body.status}',
  WHERE id=${req.params.id}`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
