
import  dbs from "../data/db.json" with {type:"json"}
import { randomUUID } from "node:crypto"

export class ClientModel{
static async getAll({client,department} = {}){

 let clients = dbs.clients

 if(client){
  clients = clients.filter(el =>
    el.client.toLowerCase().includes(client.toLowerCase())
  )
 }

 if(department){
  clients = clients.filter(el =>
    el.department === department
  )
 }

 return clients
}






 static async getById(id){
  const client = dbs.clients.find(el => el.id === id)
  return client
}
  



static async create({client,department,email,phone,active,fecha}){
  
    const newClient={
        id:randomUUID(),
        client,
        department,
        email,
        phone,
        active,
        fecha
    }
    dbs.clients.push(newClient);

    
    return  newClient;
}

static async update({id,...data}){

  const index = dbs.clients.findIndex(el => el.id === id)

  if(index === -1) return null

  dbs.clients[index] = {
    ...dbs.clients[index],
    ...data
  }

  return dbs.clients[index]
}


 static async delete(id){

  const client = dbs.clients.find(el => el.id === id)

  if(!client) return null

  dbs.clients = dbs.clients.filter(el => el.id !== id)

  return client
}

}