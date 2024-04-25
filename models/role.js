const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    roleId: { type: Number, required: true, unique: true },
    groupId: Number,
    roleName: {
        type: String,
        required: true
    },
    description: String,
    isActive: { type: Boolean, default: true },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});
const role = mongoose.model('role', roleSchema);
module.exports = role;