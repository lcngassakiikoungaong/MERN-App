const mongoose = require('mongoose');

const summarySchema = new mongoose.Schema({

    userID: {
        type: String,
        required: true,
    },
    financeTotal: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('summarySchema', summarySchema);