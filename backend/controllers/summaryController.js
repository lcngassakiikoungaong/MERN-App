const Summary = require('../models/summarySchema');


//*** POST APIS ***/

exports.createSummary = async (req, res) => { //Exports a single function, 'createUser'
    try{
        const summary = new Summary(req.body);
        await summary.save();
        res.status(201).json(summary);
    } catch (error) {
        /* If the request is received, but it is a bad request, 
        you will get a console error with status 400 */
        res.status(400).json( { message: error.message });
    }
};