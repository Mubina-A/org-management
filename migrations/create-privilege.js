
const Privilege = require('../models/privilege');

module.exports = {
    async up() {
        // Create the organization collection if it doesn't exist
        if (!await Privilege.exists()) {
            await Privilege.createCollection();
        }
    },

    async down() {
        // Drop the organization collection
        await Privilege.collection.drop();
    }
};
