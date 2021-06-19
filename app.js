require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const db = require("./config/keys.js").MongoURI;
const PORT = process.env.PORT || 5000;


const userRouter = require("./routes/users.js");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(db, { useUnifiedTopology: true }, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.log(err);
  });

// app.use(indexrouter);
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Server started in port: ${PORT}`);
});
