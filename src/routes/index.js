import { Router } from "express";
import { getData, getDataById, createData } from "../controllers/dataController.js"

const routes = Router();
routes.get("/", getData);
routes.get("/:id", getDataById);
routes.post("/", createData);

export default routes;