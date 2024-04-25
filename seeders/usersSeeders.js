const mongoose = require('mongoose');
const users = require('../models/users'); 
const connectDB = require('../config/database');
const seedDatabase = async () => {
  try {
   
    const usersSeedData = [
      { userId: 1, username: 'TOBY_PORTER', name: 'Toby Porter', email: 'toby@mailinator.com', mobileNumber: '9500190765', password: 'toby@10', organizationId: 1, roleId: 3, groupId:2 },
    ];
    // Insert seed data into the collection
    await users.insertMany(usersSeedData);
  } catch (error) {
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
};
// Call the seed function
seedDatabase();