import { SalesModel } from "../models/sales.js"

export class SalesController{
    
    static async getAll(req,res){
    
     
    
      const sales = await SalesModel.getAll()
    
      return res.json(sales)
    }
    
}