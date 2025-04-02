
export const connectDB = async () => {
try{
    const  conn = await monggose.connect(process.env.MONGO_URI); // able to connect database base on the URI provided in the .env file
    console.log('MongoDB connected:', conn.connection.host);
}catch(error){
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit the process with failure (1) if the connection fails (0) is sucess
}
};