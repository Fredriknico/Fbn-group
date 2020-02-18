const express = require('express');
const router = express.Router();

// Item Model

const Item = require('../../models/items');

//@route    GET api/items
//@desc     GET All Items
//@access   public

router.get('/', (req, res) => {
  Item.query('SELECT * FROM').then(items => res.json(items));
});

module.exports = router;
