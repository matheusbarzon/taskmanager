import { Request, Response } from "express";

class TaskController {

  static getTasks = (_: Request, res: Response) => {
    let db = require("../database/dbConnect.ts");

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
