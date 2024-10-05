const mongoose = require("mongoose");

mongoose
  .connect('mongodb://localhost:27017/ecommerce')
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("No connection:", err);
  });


module.exports = mongoose.Connection;