 import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from './models/Product.model.js';

dotenv.config();

  const app = express();

  const PORT =process.env.PORT || 5000; // set the port to 5000 or the port specified in the environment variables

  app.use(express.json()); // parse JSON request body allow use to accept json data in request body

  app.post("/api/products", async (req, res) => {
    const product = req.body; // user will send this data in the request body
     
    if (!product.name || !product.price || !product.image) {
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

  app.listen(PORT, () => {
    connectDB();
    console.log("server started at http://localhost:" + PORT);
});





