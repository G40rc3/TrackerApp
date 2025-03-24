import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.listen(8080, function () {
  console.log("Running on port 8080");
});
