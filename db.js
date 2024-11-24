import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://iriszamora1525:VcSXkDvkzQF8yEVJ@cluster0.nbm3i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"); 
    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Salir con error
  }
};

export default connectDB;
