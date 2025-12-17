import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('Db connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;