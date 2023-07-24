import { Router } from "express";

let PingController = require("../controllers/pingController.ts");

const router: Router = Router();

router.get("/ping", PingController.getPing);

module.exports = router;
