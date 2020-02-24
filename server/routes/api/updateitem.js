const express = require('express');
const db = require('../../database');
const router = express.Router();

// Update storage item
router.get('/:id', (req, res) => {
  let update_item_description = 'Kulepenner';
  let sql = `UPDATE storage SET itemDescription = '${update_item_description}' WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Item updatet');
  });
});

// Update storage item quantity
router.get('/quantity/:id', (req, res) => {
  let update_item_quantity = 83;
  let sql = `UPDATE storage SET quantity = '${update_item_quantity}' WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send('Item quantity updatet');
  });
});

module.exports = router;
