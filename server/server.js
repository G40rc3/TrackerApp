import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://trackerappserver.onrender.com",
    methods: ["GET", "POST"],
  })
);
dotenv.config();

app.get("/", function (request, response) {
  response.json({ message: "Beep" });
});

app.post("/message", function (request, response) {
  response.json({ message: "Boop" });
});

const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`Server is listening on port ${port}`);
});
