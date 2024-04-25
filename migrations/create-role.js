
const Role = require('../models/role');

module.exports = {
    async up() {
        // Create the organization collection if it doesn't exist
        if (!await Role.exists()) {
            await Role.createCollection();
        }
    },

    async down() {
        // Drop the organization collection
        await Role.collection.drop();
    }
};
