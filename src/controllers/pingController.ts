import { Request, Response } from "express";
import { DBDatabase } from "../database/dataBase";

class PingController {
  static getPing = function (_: Request, res: Response) {
    let db = new DBDatabase();

    db.query("SELECT CURRENT_TIMESTAMP;", function (error: any, results: any) {
      if (error) {
        res
          .status(400)
          .json({ erro: `Erro ao conectar no banco: ${error.sqlMessage}` });

        return;
      }

      res.status(200).json({
        status: "Ok",
        currentDateTime: results[0].CURRENT_TIMESTAMP || "",
      });
    });
  };
}

module.exports = PingController;
