const bcrypt = require('bcrypt')

const hashPassword = async(password) =>{
    const hashedPassword = bcrypt.hash(password, 10)
    return hashedPassword
}

const comparePassword = async (password, newPassword) =>{
    const decodedPassword = bcrypt.compare(newPassword, password)
    return decodedPassword
}

module.exports = {hashPassword, comparePassword}