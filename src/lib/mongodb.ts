import mongoose from "mongoose";

let db: typeof mongoose;

export default async function connectMongoDb() {
  if (db) return;
  if (!process.env.MONGODB_URI) {
    console.error("No MONGODB_URI variable defined inside environment file");
    return;
  }
  try {
    db = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    throw "An error occured while connecting to MongoDB";
  }
}
