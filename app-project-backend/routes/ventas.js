import { Router } from "express";
import { SalesController } from "../controllers/sales.js";



export const SalesRouter=Router();

SalesRouter.get("/",SalesController.getAll)