const express = require('express');
const db = require('../../../../database/nicobu');
const router = express.Router();

// Select storage item
router.get('/:id/:date', (req, res) => {
  let sql = `SELECT * FROM bookings WHERE eventid =${req.params.id} AND start =${req.params.date}`;
  db.query(sql, (err, result) => {
    res.sendStatus(200);
    res.send(result);
    if (err) throw err;
    res.sendStatus(501);
    res.send(err);
  });
});

module.exports = router;
