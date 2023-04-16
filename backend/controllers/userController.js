const User = require('../models/user');

exports.createUser = async (req, res) => { //Exports a single function, 'createUser'
    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        /* If the request is received, but it is a bad request, 
        you will get a console error with status 400 */
        res.status(400).json( { message: error.message });
    }
};