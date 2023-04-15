const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// A single route that maps the '/users' endpoint to the 'createUser' function in the 'userController'
router.post('/users', userController.createUser);

module.exports = router;