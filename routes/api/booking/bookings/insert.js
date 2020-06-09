const express = require('express');
const router = express.Router();
const db = require('../../../../database/nicobu');
const app = express();

router.post('/', (req, res) => {
  let post = {
    id: req.body.id,
    start: req.body.start,
    eventid: req.body.eventid,
    responsible: req.body.responsible,
    location: req.body.location,
    number: req.body.number,
    comments: req.body.comments,
    phone: req.body.phone,
    email: req.body.email,
    participants: req.body.participants,
  };
  let sql = 'INSERT INTO bookings SET ?';
  db.query(sql, post, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
