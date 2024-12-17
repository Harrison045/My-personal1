const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bankRoute = require("./routes/bank")
const accountRoute = require("./routes/account")



//server
server = express();
//bodyParser
server.use(bodyParser.json());

server.use(bankRoute)
server.use(accountRoute)




let mongoDb = "mongodb+srv://odameharrison13:NdZk796hK9PhiBCn@gen28.imehc.mongodb.net/?retryWrites=true&w=majority&appName=Gen28";

mongoose
  .connect(mongoDb)
  .then((result) => {
    server.listen(5000, "localhost", () =>
      console.log("server is live on port 5000")
    );
  })
  .catch((err) => console.log(err));

