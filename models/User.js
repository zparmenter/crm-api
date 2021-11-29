const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        require: [true, 'Username must be provided.'],
        unique: true,
    },
    password: {
        type: String,
        require: [true, 'Password must be provided.'],
    },
    email: {
        type: String,
        require: [true, 'Email must be provided.'],
        unique: true,
    },
    
});

const User = mongoose.model('User', UserSchema);

module.exports = User;