import mongoose from "mongoose"; // added import for mongoose

export const connectDB = async () => {
    try {
        // fixed typo: use mongoose instead of monggose
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected:', conn.connection.host);
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};