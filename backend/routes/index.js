const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const tableController = require('../controllers/tableController');
const summaryController = require('../controllers/summaryController');

// Explanation: Routes that maps the '/<name>' endpoint to the related controller function

//************ POST API Endpoints *************/

router.post('/users', userController.createUser);
router.post('/liveRow', tableController.createLiveRow);
router.post('/giveRow', tableController.createGiveRow);
router.post('/growRow', tableController.createGrowRow);
router.post('/oweRow', tableController.createOweRow);
router.post('/summary', summaryController.createSummary);

//************ GET API Endpoints *************/

router.get('/findUsers/:email', userController.findUser); //finds user according to email unique key
// router.get('/getLiveRow/:rowIndex:_id', userController.findUser);

module.exports = router;