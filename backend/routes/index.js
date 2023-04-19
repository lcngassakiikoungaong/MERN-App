const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const tableController = require('../controllers/tableController');
const summaryController = require('../controllers/summaryController');

// Explanation: Routes that maps the '/<name>' endpoint to the related controller function

//************ POST API Endpoints *************/

//Create Database Functions
router.post('/users', userController.createUser);
router.post('/liveRow', tableController.createLiveRow);
router.post('/giveRow', tableController.createGiveRow);
router.post('/growRow', tableController.createGrowRow);
router.post('/oweRow', tableController.createOweRow);
router.post('/summary', summaryController.createSummary);

//Delete Database Functions
router.post('/deleteLiveRow', tableController.deleteLiveRow);
router.post('/deleteGiveRow', tableController.deleteGiveRow);
router.post('/deleteGrowRow', tableController.deleteGrowRow);
router.post('/deleteOweRow', tableController.deleteOweRow);

//Retrieval Database Functions
router.post('/getLiveRow', tableController.getLiveRow);



//************ GET API Endpoints *************/

router.get('/findUsers/:email', userController.findUser); //finds user according to email unique key

module.exports = router;