import mongoose from "mongoose";

export const connect = async (MONGODB_URI) => {
  try {
    await mongoose.connect(MONGODB_URI).then(console.log("MongoDB connected"));
  } catch (error) {
    console.log(error.message);
  }
};
