const mongoose = require('mongoose');

// #2 Setup Mongoose and MongoDB
// create mongoose model
const weatherSchema = new mongoose.Schema({
    city: {
        type: String, 
        required: true
    },
    temperature: {
        type: Number, 
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Weather', weatherSchema);