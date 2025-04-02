import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String, // store name as string
        required: true,
    },
    price: {
        type: Number, // store price as number
        required: true,
    },
    description: {
        type: String, // store description as string
        required: true,
    },
    image: {
        type: String, // store image as string
        required: true,
    }
}, { 
    timestamps: true // automatically add createdAt and updatedAt fields
});

export default mongoose.model("Product", productSchema);