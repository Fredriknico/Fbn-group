const mysql = require("mysql");
const Schema = mysql.Schema;

// Create Schema

const itemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mysql.module("item", itemSchema);
