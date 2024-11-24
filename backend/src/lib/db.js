import mongoose from "mongoose";

export const conneceDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected : ${conn.connection.host}`);
  } catch (error) {
    console.error(`Mongodb connection error : ${error.message}`);
  }
};
