
const Users = require('../models/users');

module.exports = {
    async up() {
        // Create the organization collection if it doesn't exist
        if (!await Users.exists()) {
            await Users.createCollection();
        }
    },

    async down() {
        // Drop the organization collection
        await Users.collection.drop();
    }
};
