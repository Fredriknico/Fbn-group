const express = require('express');
const db = require('../../../../database/nicobu');
const router = express.Router();

// Select booking by id and date
router.get('/:id/:date', (req, res) => {
  let sql = `SELECT * FROM bookings WHERE eventid =${req.params.id} AND start =${req.params.date}`;
  db.query(sql, (err, result) => {
    res.send(result);
    if (err) throw err;
    res.sendStatus(501);
    res.send(err);
  });
});

// Select booking by id

router.get('/:id', (req, res) => {
  let sql = `SELECT * FROM bookings WHERE eventid =${req.params.id}`;
  db.query(sql, (err, result) => {
    res.send(result);
    if (err) throw err;
    res.sendStatus(501);
    res.send(err);
  });
});

module.exports = router;
