const mysql = require("mysql");

let db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

db.connect(function (err: any) {
  if (err) throw err;

  console.log("Connected to database!");
});

module.exports = db;
