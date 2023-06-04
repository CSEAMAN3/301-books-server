const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const bp = require("body-parser");

const PORT = process.env.PORT || 8070;
const app = express();
app.use(cors());
app.use(bp.json());

const Book = require("./models/book");
const { response } = require("express");
const { default: axios } = require("axios");

mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
  response.json("this is the root route and you're here!");
});

// get books with request.query
app.get("/books", async (request, response) => {
  const books = await Book.find(request.query);
  response.json(books);
});

//delete books using the request.param
app.delete("/books/:id", async (request, response) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(request.params.id);
    console.log(deletedBook);
    response.json(deletedBook);
  } catch (error) {
    console.log(error);
  }
});

// create a book using the request.body
app.post("/books", async (request, response) => {
  const newBook = await Book.create(request.body);
  return response.json(newBook);
});

// update a book using the request param and the request body
app.put("/books/:id", async (request, response) => {
  const updatedBook = await Book.findByIdAndUpdate(request.params.id, request.body);
  response.json(updatedBook);
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
