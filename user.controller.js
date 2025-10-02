const UserService = require('./user.service')

const RegisterUserController =async (req, res)=>{
    try{
        const payload = req.body
        const newUser=  await UserService.RegisterUser(payload.email,payload.dob,username)
        if(!newUser.success){
            return res.status(newUser.status).json(newUser)
        }
        return res.status(newUser.status).json(newUser)
    }catch(error){
        console.error("Error in register controller", error)
        return{status:500, success:false, message:"Internal server error"}
    }
}

module.exports= {
    RegisterUserController
}