import express from "express";
const UserRouter = express.Router();

UserRouter.get("/", (req, res) => {
  res.send("Welcome to the book Route!");
});
UserRouter.post("/", (req, res) => {
  res.send("book Created!");
});

export default UserRouter;
