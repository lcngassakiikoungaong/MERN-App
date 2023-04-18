const User = require('../models/user');


//************ POST API Functions *************/

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


//************ GET API Functions *************/

exports.findUser = async (req, res) => { //Exports a single function, 'findUser'
    try{
        User.find({
            email: req.params.email
        })
        .then((data) => {
            console.log("data = ", data);
            res.json(data);
        })
        .catch((error) => {
            console.log("Find Error: ", error);
        })
    } catch (error) {
        /* If the request is received, but it is a bad request, 
        you will get a console error with status 400 */
        res.status(400).json( { message: error.message });
    }
};