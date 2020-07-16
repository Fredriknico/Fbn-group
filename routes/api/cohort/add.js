﻿const express = require('express');
const router = express.Router();
const db = require('../../../database/nicobu');

router.post('/', (req, res) => {
  let post = {
    id: req.body.id,
    phone: req.body.phone,
    time: req.body.time,
    status: req.body.status,
  };
  let sql = 'INSERT INTO cohort SET ?';
  db.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
