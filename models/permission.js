const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
    permissionId: { type: Number, required: true, unique: true },
    roleId: [{
        type: Number,
        ref: 'role'
    }],
    groupId: [{
        type: Number,
        ref: 'role'
    }], 
    privilegeId: [{
        type: Number,
        ref: 'role'
    }],  
    privilegeKey: [{
        type: String,
        ref: 'role'
    }],  
    isPermission: { type: Boolean, default: true },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

const permission = mongoose.model('permission', permissionSchema);
module.exports = permission;