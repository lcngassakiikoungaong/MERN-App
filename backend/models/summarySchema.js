const mongoose = require('mongoose');

const summarySchema = new mongoose.Schema({
    income: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('summarySchema', summarySchema);