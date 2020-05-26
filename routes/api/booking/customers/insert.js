const express = require('express');
const router = express.Router();
const db = require('../../../../database/nicobu');
const app = express();

router.post('/', (req, res) => {
  let post = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    location: req.body.location,
    capacity: req.body.capacity,
    unavailable: req.body.unavailable,
    image: req.body.image,
  };
  let sql = 'INSERT INTO customers SET ?';
  db.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
