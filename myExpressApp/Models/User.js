const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  profession: {
    type: String
  },
  country: {
    type: String
  },
  email: {
    type: String
  }
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
