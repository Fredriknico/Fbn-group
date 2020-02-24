const express = require('express');
const router = express.Router();
const db = require('../../database');
const app = express();
// MIDELWARE

// Insert storage item
let stock_item = 'testM';
let stock_item_quantity = 25;

router.post('/', (req, res) => {
  let post = {
    itemDescription: req.body.itemDescription,
    quantity: req.body.quantity
  };
  let sql = 'INSERT INTO storage SET ?';
  db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log('Item added in stock...');
    res.send(result);
  });
});

module.exports = router;
