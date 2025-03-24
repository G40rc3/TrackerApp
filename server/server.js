import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();







app.get("/", function (request, response) {
  
  response.json({ message: "This is the root route. " });
});


app.get("/messages", function (request, response) {
  
  response.json({
    message:
      "This is the route where we are going to retrieve all of the messages from the database!",
  });
});

app.post("/messages", function (request, response) {

  console.log("the request body on the messages POST route is:", request.body);
  const username = request.body.username;
  const userMessage = request.body.userMessage;

  console.log("Serverside username and message are:", username, userMessage);

  response.json({
    status: "OK WAHOO!",
    username: username,
    userMessage: userMessage,
  });
});


app.listen(PORT, function () {
  console.log(`This fantastical, magical App is running on ${PORT}`);
});
