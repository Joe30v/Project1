import mongoose from "mongoose"; // added import for mongoose

export const connectDB = async () => {
    try {
        // fixed typo: use mongoose instead of monggose
        const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
		console.error(`Error: ${error.message}`);       
         process.exit(1);
    }
};