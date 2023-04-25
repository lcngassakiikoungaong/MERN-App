const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");


//************ POST API Functions *************/

exports.createUser = async (req, res) => { //Exports a single function, 'createUser'
    try{
        const { error } = validate(req.body);
        if(error) {
            return res.status(400).send( { message: error.details[0].message });
        }
        
        const user = await User.findOne({email: req.body.email });
        if(user) {
            return res.status(409).send({ message: "A user with that email already exists" });
        }
        
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        await new User({...req.body, password: hashPassword}).save();
        res.status(201).send({message: "User registered successfully"});

    } catch (error) {
        console.log(error.stack);
        res.status(500).json( { message: "Internal Server Error" });
    }
};

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password")
    });
    return schema.validate(data);
}