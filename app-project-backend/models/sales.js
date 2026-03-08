import  dbs from "../data/db.json" with {type:"json"}


export class SalesModel{


static async getAll(){

 let sales = dbs.sales



 return sales
}

}
