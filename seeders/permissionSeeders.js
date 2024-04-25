const mongoose = require('mongoose');
const permission = require('../models/permission'); 
const connectDB = require('../config/database');
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    // await connectDB();
    const permissionSeedData = [
      { permissionId: 1, roleId: 1, groupId: 1, privilegeId:1, privilegeKey: 'create', isPermission: true },
      { permissionId: 2, roleId: 1, groupId: 1, privilegeId:2, privilegeKey: 'view', isPermission: true },
      { permissionId: 3, roleId: 1, groupId: 1, privilegeId:3, privilegeKey: 'delete', isPermission: true },
      { permissionId: 4, roleId: 1, groupId: 1, privilegeId:4, privilegeKey: 'edit', isPermission: true },
      { permissionId: 5, roleId: 3, groupId: 2, privilegeId:2, privilegeKey: 'view', isPermission: false }
    ];
    // Insert seed data into the collection
    await permission.insertMany(permissionSeedData);
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