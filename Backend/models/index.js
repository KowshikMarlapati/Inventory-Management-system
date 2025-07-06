const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_URI;

function main() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Successful");
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}

module.exports = { main };
