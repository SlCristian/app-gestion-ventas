import express from "express";
import { corsMiddleware } from "./middleware/cors.js";
import { clientsRouter } from "./routes/clientes.js";
import { DEFAULTS } from "./config.js";
import { ProductsRouter } from "./routes/productos.js";
import { EmployeeRouter } from "./routes/empleados.js";
import { SalesRouter } from "./routes/ventas.js";

const PORT=process.env.PORT??DEFAULTS.PORT
const app=express();

app.use(corsMiddleware())
app.use(express.json());
app.use("/clients",clientsRouter);
app.use("/products",ProductsRouter);
app.use("/employees",EmployeeRouter);
app.use("/sales",SalesRouter)

 
if(process.env.NODE_ENV!=="production"){

     app.listen(PORT,()=>{
     console.log(`servbidor levantado en http://localhost:${PORT}`)
})

}

export default app;