import { ClientModel } from "../models/client.js"

export class ClientController{

static async getAll(req,res){

  const {client,department} = req.query

  const clients = await ClientModel.getAll({client,department})

  return res.json(clients)
}





 static async get(req,res){
const {id}=req.params;
  const client= await ClientModel.getById(id);

  if(!client){
      return res.status(404).json({error:"Client not found"})
  }

 return res.json(
    client
 )

} 

static async post(req,res){
 const {client,department,email,phone,active,fecha}=req.body;

const clients= await ClientModel.create({client,department,email,phone,active,fecha});
 
   return res.status(201).json(clients);
}

static async update(req, res)  {
 const {id}=req.params
  const {client,department,email,phone,active,fecha} = req.body;

  const clientd = await ClientModel.update({id,client,department,email,phone,active,fecha});

if(!clientd){
 return res.status(404).json({error:"Client not found"})
}

return res.json(clientd);


}
static async delete(req,res){
    const {id}=req.params;

    const client= await ClientModel.delete(id);
if(!client){
 return res.status(404).json({error:"Client not found"})
}
    return res.json(client);
}
}