const mongoose = require('mongoose');
const privilege = require('../models/privilege'); 
const connectDB = require('../config/database');
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    // await connectDB();
    const privilegeSeedData = [
      { privilegeId: 1, privilege: 'Create', privilegeKey: 'create' },
      { privilegeId: 2, privilege: 'View', privilegeKey: 'view' },
      { privilegeId: 3, privilege: 'Delete', privilegeKey: 'delete' },
      { privilegeId: 4, privilege: 'Edit', privilegeKey: 'edit' }
    ];
    // Insert seed data into the collection
    await privilege.insertMany(privilegeSeedData);
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