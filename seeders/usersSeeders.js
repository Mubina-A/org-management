const mongoose = require('mongoose');
const users = require('../models/users'); 
const connectDB = require('../config/database');
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    // await connectDB();
    const usersSeedData = [
      { userId: 1, username: 'TOBY_PORTER', name: 'Toby Porter', email: 'toby@mailinator.com', mobileNumber: '9500190765', password: 'toby@10', organizationId: 1, roleId: 3, groupId:2 },
    ];
    // Insert seed data into the collection
    await users.insertMany(usersSeedData);
    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
};
// Call the seed function
seedDatabase();