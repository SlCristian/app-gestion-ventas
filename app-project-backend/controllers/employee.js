import { EmployeeModel } from "../models/employee.js"

export class EmployeeController{
    
    static async getAll(req,res){
    
      const {employee} = req.query
    
      const employees = await EmployeeModel.getAll({employee})
    
      return res.json(employees)
    }
    
}