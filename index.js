import express, { request, response } from "express";
import bodyParser from "body-parser";


const app = express();


app.use(bodyParser.json());


app.listen(3333, () =>
  console.log("Serveeeeeer is running on  http://localhost:3333")
);

////// simple rest rest api that give success response  .

app.get("/testing", (request, response) => {
  return response.json({ message: "Hello Worrrrrsssld" });
});

app.post("/login", (request, response) => {
  try {
    const { email, password } = request.body;
    const passwordFromDatabase = getPasswordFromDatabase(email);
    if (password === passwordFromDatabase){
        response.status(200).json({ message: "Login Success" });
    }else{
        response.status(400).json({ message: "Login Failed" });
    }
  } catch (err) {
    return response.status(400).json({ error: err.message });
    response.status(400).json({ message: "Login Failed" });
  }
});


function getPasswordFromDatabase(email) {
    return "123456";
    }












