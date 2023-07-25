export class DBSQLite implements IDatabase {
  db: any;

  constructor() {
    this.connect();
  }

  connect(): void {
    let sqlite3 = require("sqlite3").verbose();
    this.db = new sqlite3.Database(process.env.DB_HOST);
  }

  query(sql: String, callback: {}) {
    this.db.all(sql, callback);
  }
}
