//  import express from 'express';
// import dotenv from 'dotenv';
// import { connectDB } from './config/db.js';
// import Product from './models/Product.model.js';

// dotenv.config();

//   const app = express();

//   const PORT =process.env.PORT || 5000; // set the port to 5000 or the port specified in the environment variables

//   app.use(express.json()); // parse JSON request body allow use to accept json data in request body

//   app.post("/api/products", async (req, res) => {
//     const product = req.body; // user will send this data in the request body
     
//     if (!product.name || !product.price || !product.image) {
//       return res.status(400).json({ success:false, message: "Please provide all required fields" });
//     }

//     const newProduct = new Product(product) // create a new product instance

//     try{
//       await newProduct.save(); // save the product to the database
//       res.status(201).json({ success: true, data: newProduct });
//     } catch (error) {
//       console.error("Error on creating a product:",error.message); // log the error to the console
//       res.status(500).json({ success: false, message: "Server error" }); // send a server error response
//     }
//   });

//   app.listen(PORT, () => {
//     connectDB();
//     console.log("server started at http://localhost:" + PORT);
// });
// filepath: c:\Users\Joe ong wei herng\Project1\backend\server.js
import express from "express";
import dotenv from "dotenv";
import path from "path";

// Add the path option for dotenv
// In server.js:
const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, "../.env") });
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:" + PORT);
});