import mongoose from "mongoose";
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  ISBN: {
    type: String,
    required: true,
  },
  Borrowed: {
    type: Boolean,
  },
});

const Book = mongoose.model("Book", BookSchema);
