import express from "express";
import Product from '../models/productModels.js';
import expressAsyncHandler from "express-async-handler";
import data from '../data.js';

const productRouter = express.Router();

productRouter.get("/",expressAsyncHandler(async (req,res)=>{
    const products = await Product.find({});
    res.send(products);
}));


productRouter.get("/:id",expressAsyncHandler(async (req,res)=>{
    const products = await Product.findById(req.params.id);
    if(products)res.send(products);
    else res.status(404).send({message:"Product not Found"});
}));

productRouter.get("/seed",expressAsyncHandler(async (req,res)=>{
    const createdProduct = await Product.insertMany(data.products);
    res.send(createdProduct);
}));


export default productRouter;