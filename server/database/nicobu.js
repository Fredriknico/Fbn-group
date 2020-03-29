const mysql = require('mysql');
const util = require('util');

// mysql db
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'cpanel71.proisp.no',
  user: 'fbngrwes_nico',
  password: 'pastMigr347',
  database: 'fbngrwes_nicobu'
});
// Ping database to check for common exception errors.
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
    }
  }
  if (connection)
    connection.release(() => {
      console.log('Connection establised succesfully');
    });
  return;
});

pool.query = util.promisify(pool.query); // Magic happens here.

module.exports = pool;
