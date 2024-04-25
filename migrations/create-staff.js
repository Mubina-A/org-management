
const Staff = require('../models/staff');

module.exports = {
    async up() {
        // Create the organization collection if it doesn't exist
        if (!await Staff.exists()) {
            await Staff.createCollection();
        }
    },

    async down() {
        // Drop the organization collection
        await Staff.collection.drop();
    }
};
