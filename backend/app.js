process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const MONGODB_URI='mongodb://localhost:27017/MERN-App';
//process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Routes
app.use('/api', require('./routes'));


// Start server
const PORT = 5000; //process.env not working currently
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})