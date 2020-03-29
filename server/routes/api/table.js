const express = require('express');
const router = express.Router();
const db = require('../../database/nicobu');
// Create Table
router.get('/', (req, res) => {
  let sql = `CREATE TABLE ${req}(id int AUTO_INCREMENT, itemDescription VARCHAR(255), quantity VARCHAR(255), PRIMARY KEY (id)) `;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('Posts table created...');
  });
});

module.exports = router;
