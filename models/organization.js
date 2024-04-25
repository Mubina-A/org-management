const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
    organizationId: { type: Number, required: true, unique: true },
    orgName: {
        type: String,
        required: true
    },
    description: String,
    industry: String,
    foundedYear: Date,
    employees: Number,
    website: String,
    country: String,
    companyLogo: String,
    isActive: { type: Boolean, default: true },
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
});

const organization = mongoose.model('organization', organizationSchema);
module.exports = organization;