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
  response.json({ message: "This is the root route. Lero lero!" });
});

app.get("/messages", function (request, response) {
  response.json({
    message:
      "Dis be da lokashun from where we retreive all of the messages from the database!",
  });
});

app.post("/messages", function (request, response) {
  console.log("the request body on the messages POST route is:, request.body");
  const userName = request.body.userName;
  const userMessage = request.body.userMessage;

  console.log("ServerSide username and message are:", userName, userMessage);
  response.json({
    status: "OK WAHOO!",
    userName: userName,
    userMessage: userMessage,
  });
});

app.listen(PORT, function () {
  console.log(
    `This bestestest most UberL33Tester, magical app is running on ${PORT}`
  );
});
