import express from "express";
const BookRouter = express.Router();

BookRouter.get("/", (req, res) => {
  res.send("Welcome to the User Route!");
});
BookRouter.post("/", (req, res) => {
  res.send("User Created!");
});

export default BookRouter;
