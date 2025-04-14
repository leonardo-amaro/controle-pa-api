import { Router } from "express";
import { getData, getDataById } from "../controllers/dataController.js"

const routes = Router();
routes.get("/", getData);
routes.get("/:id", getDataById);

export default routes;