const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/crmdb';

mongoose.connect(connectionString)
    .then(() => console.log('MongoDB connected successfully!!!'))
    .catch((error) => console.log(`MongoDB connection error: ${error}`))

module.exports = {
    Company: require('./Company'),
    Audit: require('./Audit'),
}