

import  dbs from "../data/db.json" with {type:"json"}
import { randomUUID } from "node:crypto"

export class ProductModel{

static async getAll({product} = {}){

 let products = dbs.products

 if(product){
  products = products.filter(el =>
    el.product.toLowerCase().includes(product.toLowerCase())
  )
 }



 return products
}


 static async getById(id){
  const product = dbs.products.find(el => el.id === id)
  return product
}
  


static async create({product,price,stock,active}){
  
    const newproduct={
        id:randomUUID(),
        product,
        price,
        stock,
        active,
        
    }
    dbs.products.push(newproduct);

    
    return  newproduct;
}

static async update({id,...data}){

  const index = dbs.products.findIndex(el => el.id === id)

  if(index === -1) return null

  dbs.products[index] = {
    ...dbs.products[index],
    ...data
  }

  return dbs.products[index]
}


 static async delete(id){

  const product = dbs.products.find(el => el.id === id)

  if(!product) return null

  dbs.products = dbs.products.filter(el => el.id !== id)

  return product
}

}