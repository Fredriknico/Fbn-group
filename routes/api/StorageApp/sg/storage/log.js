const express = require('express');
const router = express.Router();
const db = require('../../../../../database/nicobu');

// router.post('/', (req, res) => {
//   let post = {
//     logid: req.body.logid,
//     itemid: req.body.itemid,
//     quantity: req.body.quantity,
//     location: req.body.location,
//     userid: req.body.userid,
//   };
//   let sql = 'INSERT INTO history SET ?';
//   db.query(sql, post, (err, result) => {
//     if (err) throw err;
//     console.log('Item added in history...');
//     res.send(result);
//   });
// });

// module.exports = router;

router.post('/', (req, res) => {
  let sql = `
  INSERT INTO history SET
  logid='${req.body.logid}',
  itemid='${req.body.itemid}',
  quantity='${req.body.quantity}',
  category='${req.body.category}',
  location='${req.body.location}',
  userid='${req.body.userid}'`;

  db.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

module.exports = router;
