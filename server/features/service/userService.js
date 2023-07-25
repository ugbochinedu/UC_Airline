const { NotFoundException } = require("../exceptions/NotFoundException");
const User = require("../models/user");
const {hashPassword} = require('../common/validator')

const createUser = async (request) => {
  const { firstName, lastName, password, email, userName, phoneNumber } = request;

  const user = await User.findOne({ email });

  if (user) {
    throw new NotFoundException("User already exist");
  }

  const hashedPassword = await hashPassword(password)

  const newUser = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashedPassword,
    userName: userName,
    phoneNumber: phoneNumber,
  });

  const savedUser = await newUser.save();

  const response = {
    _id: savedUser._id,
    userName: savedUser.userName,
    firstName: savedUser.firstName,
    lastName: savedUser.lastName,
    email: savedUser.email,
    role: savedUser.role,
  }

  return {
    data: response,
    message: "User Created successfully",
  };
};

const findUserByEmail = async (email) =>{
    const user = await User.findOne({email})
    return{
        data: user,
        message: 'User successfully retrieved'
    }
}

module.exports = {createUser, findUserByEmail}