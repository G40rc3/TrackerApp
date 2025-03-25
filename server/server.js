import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/", function (request, response) {
  response.json({ message: "Beep" });
});

app.post("/message", function (request, response) {
  response.json({ message: "Boop" });
});

app.listen(8080, function () {
  console.log("Server is listening on port 8080");
});
