const mongoose = require('mongoose');
const staff = require('../models/staff'); 
const connectDB = require('../config/database');
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    // await connectDB();
    const staffSeedData = [
      { staffId: 1, username: 'ADMIN', name: 'Brendan Eich', email: 'brendan@mailinator.com', mobileNumber: '9500190765', password: 'brendan@10', roleId: 1, groupId:1 },
    ];
    // Insert seed data into the collection
    await staff.insertMany(staffSeedData);
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