const express = require('express');
const db = require('../../../../database/nicobu');
const router = express.Router();

// Select storage item
router.get('/:id/:date', (req, res) => {
  let sql = `SELECT * FROM bookings WHERE eventid =${req.params.id} AND start =${req.params.date}`;
  console.log(sql);
  db.query(sql, (err, result) => {
    console.log(result);
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
