import  dbs from "../data/db.json" with {type:"json"}


export class EmployeeModel{


static async getAll({employee} = {}){

 let employees = dbs.employees

 if(employee){
  employees = employees.filter(el =>
    el.employee.toLowerCase().includes(employee.toLowerCase())
  )
 }



 return employees
}

}
