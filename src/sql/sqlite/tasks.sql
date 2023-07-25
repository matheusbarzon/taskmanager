DROP TABLE IF EXISTS node_db.tasks;

CREATE TABLE IF NOT EXISTS node_db.tasks (
  TasksId INTEGER PRIMARY KEY AUTOINCREMENT,
  Descricao VARCHAR(255) NOT NULL,
  DataCriacao DATE NOT NULL,
  DataPrevisaoConclusao DATE,
  DataConclusao DATE
);
