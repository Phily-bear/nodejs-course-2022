const { Schema, default: mongoose } = require("mongoose");

const BookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Book", BookSchema, "book");
