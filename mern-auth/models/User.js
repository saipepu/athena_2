const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  rank: {
    type: Number,
  },
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unqiue: true,
  },
  password: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  exp: {
    type: Number,
  },
});

module.exports = User = mongoose.model("users", UserSchema);
