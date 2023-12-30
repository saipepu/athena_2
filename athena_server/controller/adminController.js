const jwt = require('jsonwebtoken')
const expressjwt = require('express-jwt')
const Admin = require("../models/admin")
require('dotenv').config();
const _ = require('lodash')

// sign up
exports.signup = async (req, res) => {
  let adminList = process.env.adminList.split(',')
  if(adminList.includes(req.body.email)) {
    req.body.role = 1;
  }
  const admin = new Admin(req.body);
  try {
    const result = await admin.save();
    return res.status(200).json({ signUpSuccess: true, message: admin})
  } catch(err) {
    return res.status(400).json({ signUpSuccess: false, error: err})
  }
}

exports.signin = async (req, res) => {
  const { email, password} = req.body;

  // find user by email
  try {
    const admin = await Admin.findOne({ email: email })
    // res.status(200);
    if(admin.authentication(password)) {
      
      const token = jwt.sign({ _id: admin._id }, process.env.SECRET)
      res.cookie('adminToken', token, { expire: new Date() + 9999 })

      return res.status(200).json({ signInSuccess: true, message: { admin, token }})
    } else {
      return res.status(400).json({ signInSuccess: false, error: 'incorrect password'})
    }
  } catch(err) {
    return res.status(400).json({ signInSuccess: false, error: err })
  }
}

exports.signOut = (req, res) => {
  res.clearCookie('adminToken');
  return res.status(200).json({ signOutSuccess: true, message: 'Sign Out'})
}

exports.adminById = async (req, res, next, id) => {
  try{
    const admin = await Admin.findOne({ _id: id })
    req.profile = admin;
    next();
  } catch(err) {
    return res.status(400).json({ error: "Can't find user"})

  }
}

exports.updateName = async (req, res) => {
  
  try {
    req.profile = _.extend(req.profile, req.body)
    const admin = await req.profile.save();
    return res.status(200).json({ updateSuccess: true, message: admin})
  } catch(err) {
    return res.status(400).json({ updateSuccess: false, error: err })
  }
}

exports.deleteAccount = async (req, res) => {
  try {
    const result = await Admin.findOneAndDelete({ _id: req.profile._id })
    return res.status(200).json({ deleteSuccess: true, message: result })
  } catch(err) {
    return res.status(200).json({ deleteSuccess: false, error: err })
  }

}

exports.getAll = async (req, res) => {
  try {
    const result = await Admin.find().exec();
    return res.status(200).json({ getAllEmployeeSuccess: true, message: result })
  } catch(err) {
    return res.status(400).json({ getAllEmployeeSuccess: false, error: err })
  }
}

exports.getOne = async (req, res) => {
  try {
    const result = await Admin.findOne({ _id: req.profile._id })
    return res.status(200).json({ getOneAdminSuccess: true, message: result })
  } catch(err) {
    return res.status(400).json({ getOneAdminSuccess: false, error: err})
  }
}