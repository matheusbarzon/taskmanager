import express, { Express } from "express";
let ping = require("./pingRoutes.ts");
// TODO: Tasks
// let tasks = require("./tasksRoutes.ts");

const routes = (app: Express) => {
  app.use(ping);
};

export default routes;
