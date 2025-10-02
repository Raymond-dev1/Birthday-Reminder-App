const express = require ('express')
const router =express.Router();

const userController= require('./user.controller')

router.post('/register', userController.RegisterUserController)

module.exports=router