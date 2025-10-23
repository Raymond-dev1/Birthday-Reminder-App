const express = require ('express')
const router =express.Router();

const userController= require('./user.controller')

router.post('/register', userController.RegisterUserController)

router.get('/get-u', userController.getUserByEmailC)
router.delete('/delete-u', userController.deleteUserByEmailC)
router.get('/all-users', userController.getAllUsersC)

module.exports=router