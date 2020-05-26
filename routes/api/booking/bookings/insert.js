const express = require('express');
const router = express.Router();
const db = require('../../../../database/nicobu');
const app = express();

router.post('/', (req, res) => {
  let post = {
    start: req.body.start,
    end: req.body.end,
    event: req.body.event,
    responsible: req.body.responsible,
    location: req.body.location,
    number: req.body.number,
    comments: req.body.comments,
    phone: req.body.phone,
  };
  let sql = 'INSERT INTO bookings SET ?';
  db.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
