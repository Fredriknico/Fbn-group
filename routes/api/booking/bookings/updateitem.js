const express = require('express');
const db = require('../../../../database/nicobu');
const router = express.Router();

// Update storage item
router.post('/:id', (req, res) => {
  let sql = `
  UPDATE bookings SET
  title='${req.body.title}',
  description='${req.body.description}',
  quantity='${req.body.quantity}',
  category='${req.body.category}',
  location='${req.body.location}',
  reserved='${req.body.reserved}'
  WHERE id=${req.params.id}`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
