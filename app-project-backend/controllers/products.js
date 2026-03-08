import { ProductModel } from "../models/product.js"

export class ProductController{

static async getAll(req,res){

  const {product} = req.query

  const products = await ProductModel.getAll({product})

  return res.json(products)
}





 static async get(req,res){
const {id}=req.params;
  const product= await ProductModel.getById(id);

  if(!product){
      return res.status(404).json({error:"product not found"})
  }

 return res.json(
    product
 )

} 

static async post(req,res){
 const {product,price,stock,active}=req.body;

const products= await ProductModel.create({product,price,stock,active});
 
   return res.status(201).json(products);
}

static async update(req, res)  {
 const {id}=req.params
  const{product,price,stock,active} = req.body;

  const productd = await ProductModel.update({id,product,price,stock,active});

if(!productd){
 return res.status(404).json({error:"product not found"})
}

return res.json(productd);


}
static async delete(req,res){
    const {id}=req.params;

    const product= await ProductModel.delete(id);
if(!product){
 return res.status(404).json({error:"product not found"})
}
    return res.json(product);
}
}