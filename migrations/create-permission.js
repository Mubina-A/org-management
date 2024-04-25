
const permission = require('../models/permission');

module.exports = {
    async up() {
        // Create the organization collection if it doesn't exist
        if (!await permission.exists()) {
            await permission.createCollection();
        }
    },

    async down() {
        // Drop the organization collection
        await permission.collection.drop();
    }
};
