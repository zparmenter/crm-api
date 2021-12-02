const mongoose = require('mongoose');


const connectionString = `${process.env.MONGODB_URI}`;

mongoose.connect(connectionString)
    .then(() => console.log('MongoDB connected successfully!!!'))
    .catch((error) => console.log(`MongoDB connection error: ${error}`))

module.exports = {
    Company: require('./Company'),
    Audit: require('./Audit'),
    User: require('./User'),
}