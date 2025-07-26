import express from "express";
// import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.listen(PORT, () => {
  console.log("Listening to the port on 8000");
});
