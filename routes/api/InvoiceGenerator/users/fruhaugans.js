const express = require('express');
const db = require('../../../database/invoice_generator');
const router = express.Router();

// Select storage item

router.post('/', (req, res) => {
  const data = req.body;
  console.log(req.json(data));
});

// router.get('/', (req, res) => {
//   let sql = `SELECT * FROM config_fruhaugans`;
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     res.send(result);
//   });
// });

router.post('/update', (response, res) => {
  req = response.body;
  console.log(req);
  var values = [
    [
      req.id,
      req.fullpath_tilbud,
      req.fullpath_ordre,
      req.fullpath_header,
      req.fullpath_footer,
      req.footer_spacer_adjust,
      req.pdf_text,
      req.product_1,
      req.product_2,
      req.product_3,
      req.product_4,
      req.product_5,
      req.product_6,
      req.product_7,
      req.product_8,
      req.product_9,
      req.product_10,
      req.product_11,
      req.product_12,
      req.product_price_1,
      req.product_price_2,
      req.product_price_3,
      req.product_price_4,
      req.product_price_5,
      req.product_price_6,
      req.product_price_7,
      req.product_price_8,
      req.product_price_9,
      req.product_price_10,
      req.product_price_11,
      req.product_price_12,
      req.supplier,
      req.supplier_adress,
      req.supplier_phone,
      req.agile_api,
      req.agile_email,
      req.agile_url,
      req.logo
    ]
  ];

  let sql = `INSERT INTO config_fruhaugans(
    id,
    fullpath_tilbud,
    fullpath_ordre,
    fullpath_header,
    fullpath_footer,
    footer_spacer_adjust,
    pdf_text,
    product_1,
    product_2,
    product_3,
    product_4,
    product_5,
    product_6,
    product_7,
    product_8,
    product_9,
    product_10,
    product_11,
    product_12,
    product_price_1,
    product_price_2,
    product_price_3,
    product_price_4,
    product_price_5,
    product_price_6,
    product_price_7,
    product_price_8,
    product_price_9,
    product_price_10,
    product_price_11,
    product_price_12,
    supplier,
    supplier_adress,
    supplier_phone,
    agile_api,
    agile_email,
    agile_url,
    logo)
  VALUES ?`;

  db.query(sql, [values], (err, result) => {
    if (err) throw err;
    console.log('Item added in stock...');
    res.send(result);
  });
});

module.exports = router;
