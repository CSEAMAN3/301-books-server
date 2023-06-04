const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Book = require("./models/book");

async function seed() {
  await Book.create({
    title: "Drangon Ball Z",
    description:
      "There is a brainless hero with the power of the gods who is trying to become the strongest whom ever lived.",
    status: false,
  });
  await Book.create({
    title: "Demon Slayer",
    description: "The main character, Tanjro, is trying to turn his demon sister into a human",
    status: true,
  });
  console.log("create the books");
  mongoose.disconnect();
}

seed();
