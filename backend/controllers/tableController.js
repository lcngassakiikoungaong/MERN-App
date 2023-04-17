const liveSchema = require('../models/liveSchema');
const giveSchema = require('../models/giveSchema');
const growSchema = require('../models/growSchema');
const oweSchema = require('../models/oweSchema');

exports.createLiveRow = async (req, res) => { //Exports a single function, 'createLiveRow'
    try{
        const liveRow = new liveSchema(req.body);
        await liveRow.save();
        res.status(201).json(liveRow);
    } catch (error) {
         /* If the request is received, but it is a bad request, 
        you will get a console error with status 400 */
        res.status(400).json( { message: error.message });                            
    }
};

exports.createGiveRow = async (req, res) => { //Exports a single function, 'createLiveRow'
    try{
        const giveRow = new giveSchema(req.body);
        await giveRow.save();
        res.status(201).json(giveRow);
    } catch (error) {
         /* If the request is received, but it is a bad request, 
        you will get a console error with status 400 */
        res.status(400).json( { message: error.message });                            
    }
};

exports.createGrowRow = async (req, res) => { //Exports a single function, 'createLiveRow'
    try{
        const growRow = new growSchema(req.body);
        await growRow.save();
        res.status(201).json(growRow);
    } catch (error) {
         /* If the request is received, but it is a bad request, 
        you will get a console error with status 400 */
        res.status(400).json( { message: error.message });                            
    }
};

exports.createOweRow = async (req, res) => { //Exports a single function, 'createLiveRow'
    try{
        const oweRow = new oweSchema(req.body);
        await oweRow.save();
        res.status(201).json(oweRow);
    } catch (error) {
         /* If the request is received, but it is a bad request, 
        you will get a console error with status 400 */
        res.status(400).json( { message: error.message });                            
    }
};

