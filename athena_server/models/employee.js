const mongoose = require('mongoose');
const crypto = require('crypto');
const uuid = require('uuid').v4;
const salt = uuid();

const EmployeeModel = {
  name: {
    required: true,
    type: String,
    maxlength: 50,
  },
  email: {
    required: true,
    type: String,
    maxlength: 50,
  },
  role: {
    type: Number,
    default: 0
  },
  hashed_password: {
    required: true,
    type: String,
    minlength: 5
  },
  salt: {
    type: String
  },
  rank: {
    type: Number,
  },
  department: {
    required: true,
    type: String,
    maxlength: 50,
  },
  position: {
    required: true,
    type: String,
    maxlength: 50
  },
  exp: {
    type: Number,
    default: 0,
  },
  ATH: {
    type: Number,
    default: 0,
  },
  hr_of_training: {
    type: Number,
    default: 0,
  },
  inProgress: {
    type: Array,
    default: [],
  },
  completed: {
    type: Array,
    default: []
  },
  bookMarks: {
    type: Array,
    default: []
  },
  avatar: {
    type: String,
  },
  items: {
    type: Array
  }
}
const EmployeeSchema = new mongoose.Schema(EmployeeModel)

EmployeeSchema.virtual('password')
.set(function(password) {
  this._password = password
  this.salt = salt
  this.hashed_password = this.createHashedPassword(password)
})
.get(function() {
  return this._password
})

EmployeeSchema.methods = {
  createHashedPassword: function(plainText) {
    if(!plainText) {
      return ''
    }
    try {
      return crypto.createHmac('sha1', this.salt).update(plainText).digest('hex');
    } catch(err) {
      return ''
    }
  },
  authentication: function(plainText) {
    return this.hashed_password == this.createHashedPassword(plainText);
  }
}

module.exports = mongoose.model('Employee', EmployeeSchema);