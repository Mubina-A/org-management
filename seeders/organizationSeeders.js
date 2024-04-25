const mongoose = require('mongoose');
const organization = require('../models/organization'); 
const connectDB = require('../config/database');
const seedDatabase = async () => {
  try {
  
    const organizationsSeedData = [
      { organizationId: 1, orgName: 'ABC', description: 'Description of ABC', industry: 'product', foundedYear: new Date("1995-10-10"), employees: 100, website: 'https://www.w3schools.com/sql/default.asp', country: 'India', companyLogo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Furl-logo&psig=AOvVaw0U0r0_jK3FX5DP3hZXVb7b&ust=1714058915007000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjHh5iV24UDFQAAAAAdAAAAABAE'},
      { organizationId: 2, orgName: 'DEF', description: 'Description of DEF', industry: 'healthcare', foundedYear: new Date("1993-11-15"), employees: 200, website: 'https://www.w3schools.com/', country: 'Canada', companyLogo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-png-vectors%2Furl-logo&psig=AOvVaw0U0r0_jK3FX5DP3hZXVb7b&ust=1714058915007000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjHh5iV24UDFQAAAAAdAAAAABAJ' },
      { organizationId: 3, orgName: 'GHI', description: 'Description of GHI', industry: 'bpo', foundedYear: new Date("2019-10-29"), employees: 300, website: 'https://www.w3schools.com/js/default.asp', country: 'Australia', companyLogo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Furl-logo&psig=AOvVaw0U0r0_jK3FX5DP3hZXVb7b&ust=1714058915007000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLjHh5iV24UDFQAAAAAdAAAAABAS' }
    ];
    // Insert seed data into the collection
    await organization.insertMany(organizationsSeedData);
  } catch (error) {
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
  }
};
// Call the seed function
seedDatabase();