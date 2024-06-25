import mongoose from "mongoose";
const LibrarySchema = new mongoose.Schema({
  books: [],
  members: [],
});

const Library = mongoose.model("Library", LibrarySchema);
export default Library;
