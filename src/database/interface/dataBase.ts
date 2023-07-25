interface IDatabase {
  db: any;
  connect(): void;
  query(sql: String, callback: {}): any;
}
