import { Router } from "express";
import { EmployeeController } from "../controllers/employee.js";


export const EmployeeRouter=Router();

EmployeeRouter.get("/",EmployeeController.getAll)