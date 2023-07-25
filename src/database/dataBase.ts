import { DBMySQL } from "./dbMySQL";
import { DBSQLite } from "./dbSQLite";

export class DBDatabase {
  private db: IDatabase;

  constructor() {
    switch (process.env.DB) {
      case "mysql":
        this.db = new DBMySQL();
        break;

      case "sqlite":
        this.db = new DBSQLite();

        break;

      default:
        throw new Error("Banco de dados não implementado!");
    }
  }

  query(sql: string, callback: {}) {
    return this.db.query(sql, callback);
  }
}
