const Router = require('express').Router()
const AuthController = require('../controller/auth.controller')

//Auth
Router.post('/auth/login', AuthController.login)
Router.post('/auth/register', AuthController.register)

module.exports = Router
