import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  FIrstname: {
    type: String,
    required: true,
  },
  Lastname: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  borrowedBooks: [],
});

const User = mongoose.model("User", UserSchema);
export default User;
