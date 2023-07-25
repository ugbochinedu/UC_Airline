const { NotFoundException } = require('../exceptions/NotFoundException');
const UserService = require('./userService')
const jwt = require('jsonwebtoken')
const {comparePassword}= require('../common/validator');
const User = require('../models/user')

async function save(request){
    const user = await UserService.createUser(request);

    const { _id: userName} = user
    const token = jwt.sign({_id, userName}, 'PrivateKey')

    return{
        token: token,
        message:user.message 
    }
}

async function login (request){
    const {password, email} = request

    const user = await UserService.findUserByEmail({email})
    
    if(!user){
        throw new NotFoundException('User Not Found')
    }

    const passwordDecode = await comparePassword(password, user.data.password)

    const foundUser = await User.findOne({passwordDecode})

    if(!foundUser){
        throw new NotFoundException('Invalid Password')
    }

    const { _id, userName} = foundUser

    const token = jwt.sign({_id, userName}, 'PrivateKey')

    return{
        data: token,
        message: 'User Successfully Retrieved'
    }
}

module.exports = {save, login}   