const express = require('express');
const db = require('../../database/nicobu');
const router = express.Router();

// Update storage item
router.post('/:id', (req, res) => {
  let sql_item = `UPDATE storage SET itemDescription = '${req.body.itemDescription}' WHERE id = ${req.params.id}`;
  let sql_quanti = `UPDATE storage SET quantity = '${req.body.quantity}' WHERE id = ${req.params.id}`;
  db.query(sql_item, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
  db.query(sql_quanti, (err, result) => {
    if (err) throw err;
    res.send(result);
    console.log(result);
  });
});

module.exports = router;
