export class DBMySQL implements IDatabase {
  db: any;

  constructor() {
    this.connect();
  }

  connect(): void {
    const mysql = require("mysql");

    this.db = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE,
    });

    this.db.connect(function (err: any) {
      if (err) throw err;

      console.log("Connected to database!");
    });
  }

  query(sql: String, callback: {}) {
    this.db.query(sql, callback);
  }
}
