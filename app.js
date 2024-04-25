const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const staff = require('./routes/staff.js');
const passport = require('passport');
const connectDB = require('./config/database'); // Import the database connection

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.use(passport.initialize());

app.use(staff);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
