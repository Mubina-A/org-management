const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    staffId: { type: Number, required: true, unique: true },
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
    roleId: {
      type: Number,
      ref: 'Organization'
    },
    groupId: [{
      type: Number,
      ref: 'Organization'
    }],
    isActive: { type: Boolean, default: true },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  });
  const staff = mongoose.model('staff', staffSchema);
  module.exports = staff;