const mongoose = require('mongoose');

const privilegeSchema = new mongoose.Schema({
    privilegeId: { type: Number, required: true, unique: true },
    privilege: {
        type: String,
        required: true
    },
    privilegeKey: String,
    isActive: { type: Boolean, default: true },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

const privilege = mongoose.model('privilege', privilegeSchema);
module.exports = privilege;
