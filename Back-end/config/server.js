 import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db.js';
import Product from '../models/Product.model.js';

dotenv.config();

  const app = express();

  app.use(express.json()); // parse JSON request body allow use to accept json data in request body

  app.post("/api/products", async (req, res) => {
    const product = req.body; // user will send this data in the request body
     
    if (!product.name || product.price || product.image || product.description) {
      return res.status(400).json({ success:false, message: "Please provide all required fields" });
    }

    const newProduct = new Product(product); // create a new product instance

    try{
      await newProduct.save(); // save the product to the database
      res.status(201).json({ success: true, message: "Product created successfully", product: newProduct });
    } catch (error) {
      console.error("Error on creating a product:",error.message); // log the error to the console
      res.status(500).json({ success: false, message: "Server error" }); // send a server error response
    }
  });


  app.get("/Products" , (_req, res) => {
    res.json([
        {
            id: 1,
            name: "Product 1",
            price: 100,
            description: "Description for product 1",
        },
        {
            id: 2,
            name: "Product 2",
            price: 200,
            description: "Description for product 2",
        },
        {
            id: 3,
            name: "Product 3",
            price: 300,
            description: "Description for product 3",
        },
    ]);
  }
    );
  app.listen(5000, () => {
    connectDB();
  console.log('server started at htttp://localhost:5000');
});





