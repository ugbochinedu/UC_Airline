const Router = require('express').Router()
const AuthController = require('../controller/auth.controller')
const {User, validate} = require("../models/user");
const bcrypt = require("bcrypt");
const Token = require("../models/token");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");

//Auth
Router.post('/auth/login', AuthController.login)
Router.post('/auth/register', AuthController.register)

//User

Router.post("/", async(req, res) =>{
    try{
        const {error} = validate(req.body);
        if(error)
        return res.status(400).send({message: error.details[0].message});

        let user = await User.findOne({email: req.body.email});
        if(user) return res.status(409).send({message: "User with given email already exist"});

        const salt = await bcrypt.genSalt(Number(proess.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        user = await new User({...req.body, password: hashPassword}).save();

        const token = await new Token({
            userId : user_id,
            token: crypto.randomBytes(32).toString("hex")
        }).save();

        const url = `${process.env.BASE_URL}users/${user._id}/verify/${token.token}`
        await sendEmail(user.email,"Verify Email", url);

        res.status(201).send({message: "An Email sent to your account please verify"});
    } catch (error){
        res.status(500).send({message: "Internal Server Error"});
    }
})

Router.

module.exports = Router
