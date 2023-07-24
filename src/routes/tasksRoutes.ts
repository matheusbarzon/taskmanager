import { Router } from "express";

let TaskController = require("../controllers/tasksController.ts");

const router: Router = Router();

router.get("/tasks", TaskController.getTasks);

module.exports = router;
