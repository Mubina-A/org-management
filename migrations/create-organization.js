
const Organization = require('../models/organization');

module.exports = {
    async up() {
        // Create the organization collection if it doesn't exist
        if (!await Organization.exists()) {
            await Organization.createCollection();
        }
    },

    async down() {
        // Drop the organization collection
        await Organization.collection.drop();
    }
};
