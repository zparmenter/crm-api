const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuditSchema = new Schema({

    //company is tied to the audits by its Id as shown below
    company: {
        type: mongoose.Types.ObjectId,
        ref: 'Company'
    }, 
    instagramUrl: {
        type: String,
    },
    instagramUrl2: {
        type: String,
    },
    facebookUrl: {
        type: String,
    },
    facebookUrl2: {
        type: String,
    },
    twitterUrl: {
        type: String,
    },
    twitterUrl2: {
        type: String,
    },
    googleUrl: {
        type: String,
    },
    googleUrl2: {
        type: String,
    },
    phoneNumber: {
        type: Number,
    },
    address: {
        type: String,
    },
    website: {
        type: String,
    }
})

const Audit = mongoose.model('Audit', AuditSchema);

module.exports = Audit;