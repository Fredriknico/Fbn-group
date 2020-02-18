/* eslint-disable no-undef */
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");

//const items = require('./routes/api/items');

const app = express();

// BodyParser middleware
app.use(bodyParser.json());

// mysql db
const db = mysql.createConnection({
  host: "cpanel71.proisp.no",
  user: "fbngrwes_nico",
  password: "pastMigr347",
  database: "fbngrwes_nicobu"
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("mysql connected ! ");
});

app.get("/"), (req, res) => res.send("TEST");

// Create Table
let table = "storage";
app.get("/createposttable", (req, res) => {
  let sql = `CREATE TABLE ${table}(id int AUTO_INCREMENT, itemDescription VARCHAR(255), quantity VARCHAR(255), PRIMARY KEY (id)) `;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Posts table created...");
  });
});

// Insert storage item
let stock_item = "T-skjorte M";
let stock_item_quantity = 25;
app.get("/insertitem", (req, res) => {
  let post = { itemDescription: stock_item, quantity: stock_item_quantity };
  let sql = "INSERT INTO storage SET ?";
  db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Item added in stock...");
  });
});

// Select all storage items
app.get("/selectallitems", (req, res) => {
  let sql = "SELECT * FROM storage";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Items fetched");
  });
});

// Select storage item
app.get("/singelitem/:id", (req, res) => {
  let sql = `SELECT * FROM storage WHERE id =${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Items fetched");
  });
});

// Update storage item
app.get("/updateitem/:id", (req, res) => {
  let update_item_description = "Kulepenner";
  let sql = `UPDATE storage SET itemDescription = '${update_item_description}' WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Item updatet");
  });
});

// Update storage item quantity
app.get("/updatequantity/:id", (req, res) => {
  let update_item_quantity = 83;
  let sql = `UPDATE storage SET quantity = '${update_item_quantity}' WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Item quantity updatet");
  });
});

// Delete storage item
app.get("/deleteitem/:id", (req, res) => {
  let sql = `DELETE FROM storage WHERE id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Item deleted");
  });
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
