DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
    TasksId int NOT NULL AUTO_INCREMENT,
    Descricao varchar(255) NOT NULL,
    DataCriacao date NOT NULL,
    DataPrevisaoConclusao date,
    DataConclusao date,
    PRIMARY KEY (TasksId)
);