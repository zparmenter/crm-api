const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    companyName: {
        type: String,
        require: [true, 'Company Name must be provided.'],
        unique: true,
    },
    companyContact: {
        type: String,
        require: [true, 'Contact must be provided.'],
    },
    email: {
        type: String,
        require: [true, 'Email must be provided.'],
        unique: true,
    },
    phoneNumber: {
        type: Number,
        require: [true, 'Phone Number must be provided.'],
    },
    logo: {
        type: String,
        require: [true, 'Logo image must be provided.'],
    }
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;