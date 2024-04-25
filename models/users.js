const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: { type: Number, required: true, unique: true },
  username: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobileNumber: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  organizationId: [{
    type: Number,
    ref: 'Organization'
  }],
  roleId: {
    type: Number,
    ref: 'role'
  },
  groupId: {
    type: Number,
    ref: 'role'
  },
  isActive: { type: Boolean, default: true },
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
});

const user = mongoose.model('user', userSchema);
module.exports = user;