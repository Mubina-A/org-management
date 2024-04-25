const mongoose = require('mongoose');
const role = require('../models/role'); 
const connectDB = require('../config/database');
const seedDatabase = async () => {
  try {

    const roleSeedData = [
      { roleId: 1, groupId: 1, roleName: 'ADM', description: 'Admin' },
      { roleId: 2, groupId: 1, roleName: 'SUADM', description: 'Super Admin' },
      { roleId: 3, groupId: 2, roleName: 'PUB', description: 'Public' }
    ];
    // Insert seed data into the collection
    await role.insertMany(roleSeedData);
  } catch (error) {
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
};
// Call the seed function
seedDatabase();