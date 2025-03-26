import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "https://trackerappserver.onrender.com",
    methods: ["GET", "POST"],
  })
);
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DB_CONN_STRING
})





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

app.post("/userdata",async function(request,response){
const data = request.body.formValues;
console.log(data)
const exists = await db.query("SELECT * FROM userform WHERE USERNAME=$1",[data.username])
console.log(exists)
if (exists.rowCount === 0){
  const success = await db. query("INSERT INTO userform (username,password,email) VALUES ($1,$2,$3)",[data.username,data.password,data.email])
  console.log(success )
  if (success.rowCount === 1){
    response.json("success")
  }
}

})

app.listen(8080, function () {
  console.log(`This fantastical, magical App is running on ${8080}`);
});
