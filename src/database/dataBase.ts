import { DBMySQL } from "./dbMySQL";
import { DBSQLite } from "./dbSQLite";

export class DBDatabase {
  private db: IDatabase;

  private listDataBase: { [key: string]: any } = {
    mysql: DBMySQL,
    sqlite: DBSQLite,
  };

  constructor() {
    this.db = new this.listDataBase[process.env.DB ?? ""]();
  }

  query(sql: string, callback: {}) {
    return this.db.query(sql, callback);
  }
}
