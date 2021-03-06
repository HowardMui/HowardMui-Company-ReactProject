const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  name: String,
  email: String,
  title: String,
  message: String,
});

const PostMessage = mongoose.model("PostMessage", postSchema);
module.exports = PostMessage;
