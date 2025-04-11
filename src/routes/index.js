import { Router } from "express";
import getData from "../controllers/dataController.js"

const routes = Router();
routes.get("/", getData);

export default routes;