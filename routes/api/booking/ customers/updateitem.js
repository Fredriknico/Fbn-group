const express = require('express');
const db = require('../../../../database/nicobu');
const router = express.Router();

// Update storage item
router.post('/:id', (req, res) => {
  let sql = `
  UPDATE customers SET
  title='${req.body.title}',
  description='${req.body.description}',
  category='${req.body.category}',
  location='${req.body.location}',
  capacity='${req.body.capacity}',
  unavailable='${req.body.unavailable}',
  image='${req.body.image}',
  WHERE id=${req.params.id}`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
