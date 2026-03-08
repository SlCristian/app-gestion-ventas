import { Router } from "express";
import { ProductController } from "../controllers/Products.js";

export const ProductsRouter=Router();

ProductsRouter.get("/",ProductController.getAll)
ProductsRouter.get("/:id",ProductController.get)

ProductsRouter.post("/",ProductController.post)

ProductsRouter.put("/:id",ProductController.update)

ProductsRouter.delete("/:id",ProductController.delete)
