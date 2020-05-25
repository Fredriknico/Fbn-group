const express = require('express');
const db = require('../../../../../database/nicobu');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Select all reservations
router.get('/', (req, res) => {
  let sql = 'SELECT * FROM reservations';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Reservations fetched');
    res.send(result);
  });
});

// INSERT RESERVATION

router.post('/insert', (req, res) => {
  var sql =
    'INSERT INTO reservations (id,reservedfor, reservedby, contactinfo, startdate, enddate,reservedquantity,comments,reservedid) VALUES ?';

  req.body.forEach((item) => {
    const values = [
      [
        item.id,
        item.reservedfor,
        item.reservedby,
        item.contactinfo,
        item.startdate,
        item.enddate,
        item.itemQuantityCart,
        item.comment,
        item.reservedid,
      ],
    ];

    db.query(sql, [values], (err, result) => {
      if (err) throw err;
      res.send(result.status);
    });
  });
});

// UPDATE RESERVATION

router.post('/update/:id', (req, res) => {
  var sql = `UPDATE reservation SET (reservedfor, reservedby, contactinfo,startdate,enddate,reservedquantity,comment) VALUES ? WHERE id = ${req.params.id}`;
  db.query(sql, [values], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
