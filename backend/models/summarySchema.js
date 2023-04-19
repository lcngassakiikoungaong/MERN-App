const mongoose = require('mongoose');

const summarySchema = new mongoose.Schema({

    userID: {
        type: String,
        unique: true,
        required: true,
    },
    income: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('summarySchema', summarySchema);