const User = require('../models/user');
const bcrypt = require('bcryptjs');
const Joi = require("joi");

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")
    });
    return schema.validate(data);
}

exports.findUser = async (req, res) => {
    try {
        const { error } = validate(req.body);
        if(error) {
            console.log("I do get here");
            return res.status(400).send( { message: error.details[0].message });
        }
        
        const user = await User.findOne({email: req.body.email });
        if(!user) {
            return res.status(401).send({message: "Invalid Email or Password" });
        }

        const validatePassword = await bcrypt.compare(
            req.body.password, user.password
        );

        if(!validatePassword) {
            return res.status(401).send({message: "Invalid Email or Password" });
        }

        const token = user.generateToken();
        res.status(200).send({data: token, message:"Logged in sucessfully"});

    } catch(error) {
        console.log(error.stack);
        console.log("This is an error");
        res.status(500).json( { message: "Internal Server Error" });
    }

};


