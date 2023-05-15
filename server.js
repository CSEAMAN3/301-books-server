const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 8070;
const app = express();
app.use(cors());

mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
  response.json("this is the root route and you're here!");
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
// cluster password thisisthepassword
