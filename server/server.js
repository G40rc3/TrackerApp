import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8080;
dotenv.config();

app.get("/", function (request, response) {
  console.log("This is the root route. Lero lero!");
});

app.listen(PORT, function () {
  console.log(`Currently running on port: ${PORT}`);
});
