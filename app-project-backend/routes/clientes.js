import { Router } from "express";
import { ClientController } from "../controllers/clients.js";

export const clientsRouter=Router();

clientsRouter.get("/",ClientController.getAll)
clientsRouter.get("/:id",ClientController.get)

clientsRouter.post("/",ClientController.post)

clientsRouter.put("/:id",ClientController.update)

clientsRouter.delete("/:id",ClientController.delete)

