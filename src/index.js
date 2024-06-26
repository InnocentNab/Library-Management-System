import express from "express";
import dotenv from "dotenv";
import { connect } from "./Database/db.connect.js";
import UserRouter from "./Routes/UserRoute.js";
import BookRouter from "./Routes/BookRoute.js";
dotenv.config();

const app = express();

app.use(express.json());
const port = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

app.get("/", (req, res) => {
  res.send("Welcome to the Library!");
});

app.use("/user", UserRouter);
app.use("/book", BookRouter);
app.all("*", (req, res) => {
  res.send("Invalid Route!    404 Not Found!");
});

connect(MONGODB_URI).then(() => {
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
});
