import express, { Express } from "express";
let ping = require("./pingRoutes.ts");
let tasks = require("./tasksRoutes.ts");

const routes = (app: Express) => {
  app.use(ping, tasks);
};

export default routes;
