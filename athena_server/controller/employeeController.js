const Employee = require('../models/employee')
const jwt = require('jsonwebtoken')
const expressjwt = require('express-jwt')
require('dotenv').config();
const _ = require('lodash');
const employee = require('../models/employee');

exports.signup = async(req, res) => {
  const employee = new Employee(req.body);
  const existed = await Employee.findOne({ email: req.body.email })
  if(existed !== null) {
    return res.status(400).json({ signUpSuccess: false, message: "An account with this Email already Existed!"})
  } else {
    try{
      const result = await employee.save();
      return res.status(200).json({ signUpSuccess: true, message: employee })
    } catch(err) {
      return res.status(400).json({ signUpSuccess: false, error: err })
    }
  }
}

exports.signin = async(req, res) => {
  const { email, password} = req.body;

  // find user by email
  try {
    const employee = await Employee.findOne({ email: email });

    if(!employee) return res.status(400).json({ signInSuccess: false, error: "An account with this email doesn't exist" })

    if(!employee.authentication(password)) return res.status(400).json({ signInSuccess: false, error: "Incorrect Password"})

    const token = jwt.sign({ _id: employee._id}, process.env.SECRET)
    res.cookie('usertoken', token, { expire: new Date() + 9999 });
    return res.status(200).json({ signInSuccess: true, message: { employee, token }})
  } catch(err) { 
    return res.status(400).json({ signInSuccess: false, error: err})
  }
}

exports.signOut = (req, res) => {
  res.clearCookie('userToken');
  return res.status(200).json({ signOutSuccess: true, message: 'Sign Out'})
}

exports.userById = async(req, res, next, id) => {
  try {
    const employee = await Employee.findOne({ _id: id })
    req.profile = employee
  } catch(err) {
    return res.status(400).json({ error: "User not found "})
  }
  next();
}

exports.updateInfo = async(req, res) => {

  try {
    const result = await employee.findOneAndUpdate({ _id: req.profile._id } , req.body)
    res.status(200).json({ updateSuccess: true, message: result})
  } catch(err) {
    res.status(400).json({ updateSuccess: false, error: err })
  }
}

exports.deleteAccount = async(req, res) => {
  try {
    const result = await Employee.findByIdAndDelete({ _id: req.profile.id })
    return res.status(200).json({ deleteSuccess: true, message: result })
  } catch(err) {
    return res.status(400).json({ deleteSuccess: false, error: err })
  }
}

exports.getAll = async(req, res) => {
  try {
    const result = await Employee.find().exec();
    return res.status(200).json({ getAllEmployeeSuccess: true, message: result })
  } catch(err) {
    return res.status(400).json({ getAllEmployeeSuccess: false, error: err })
  }
}

exports.getOne = async(req, res) => {
  try {
    const result = await Employee.findOne({ _id: req.profile.id })
    res.status(200).json({ getOneEmployeeSuccess: true, message: result })
  } catch(err) {
    res.status(400).json({ getOneEmployeeSuccess: false, error: err })
  }
}