const express = require('express');
const router = express.Router();
const db = require('../../../database/nicobu');
const app = express();

router.post('/', (req, res) => {
  let post = {
    title: req.body.title,
    description: req.body.description,
    quantity: req.body.quantity,
    category: req.body.category,
    location: req.body.location,
    reserved: req.body.reserved,
    image: req.body.image,
  };
  let sql = 'INSERT INTO opplevelser SET ?';
  console.log(post);
  db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log('Item added in stock...');
    res.send(result);
  });
});

module.exports = router;
