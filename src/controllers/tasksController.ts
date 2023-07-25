import { Request, Response } from "express";
import { DBDatabase } from "../database/dataBase";

class TaskController {
  static getTasks = (_: Request, res: Response) => {
    let db = new DBDatabase();

    db.query("SELECT * FROM tasks;", function (error: any, results: any) {
      if (error) {
        res
          .status(400)
          .json({ erro: `Erro ao conectar no banco: ${error.sqlMessage}` });

        return;
      }

      res.status(200).json(results);
    });
  };
}

module.exports = TaskController;
