const express = require('express');
const router = express.Router();
const db = require('../../../database/invoice_generator');
// Create Table

// router.get('/', function(req, res) {
//   res.send('hello world');
// });

router.get('/', (req, res) => {
  console.log(req.body);
  let sql = `CREATE TABLE config_fruhaugans(id int AUTO_INCREMENT,pdf VARCHAR(255),pdf_img VARCHAR(255),pdf_text VARCHAR(255),product VARCHAR(255),supplier VARCHAR(255),agile VARCHAR(255), logo VARCHAR(255),PRIMARY KEY(id))`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Posts table created...');
  });
});

module.exports = router;
