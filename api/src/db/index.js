import mongoose from "mongoose";

const connectDB = async () => {
  let uri = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/e-commerce";

  try {
    const connectionInstance = await mongoose.connect(uri);
    console.log(
      `MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

export default connectDB;
