const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
require('dotenv').config();

// middleware
app.use(bodyParser.json())
app.use(cookieParser())

const cors = require('cors')
app.use(cors())

//database connection
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect( MONGO_URL, { useNewUrlParser: true })
.then(() => console.log('DATABASE CONNECTED'))
.catch((err) => console.log(err, 'An error occured'));


// testing routes
app.get('/api/helloworld', () => {
  return "HELLOWORLD"
})

// routes
const AdminRoutes = require('./routes/adminRoutes')
const EmployeeRoutes = require('./routes/employeeRoutes')

app.use('/api/admin', AdminRoutes);
app.use('/api/employee', EmployeeRoutes);

const PORT = process.env.PORT || 3500;
app.listen(PORT, console.log(`SERVER IS RUNNING ON PORT ${PORT}`));