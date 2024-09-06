import mongoose from "mongoose";

const mongoDbConnection = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGO_DB_URI);

    if (connected) {
      console.log("Connected to mongoDB");
    }
  } catch (error) {
    console.log(`Error in MongoDB connection: ${error.message}`);
  }
};

export default mongoDbConnection;
