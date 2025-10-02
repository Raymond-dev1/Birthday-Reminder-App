const User= require('./user.models')

const RegisterUser = async(username, email, dob)=>{
    try{
        const existingUser= await User.findOne({username, email, dob})
        if(existingUser){
            return{status:409, success:false, message:"User Already Exists"}
        }
        return{status:201, success:true, message:"User registered Successfully"}
    }catch(error){
        console.error('Error in RegisterUser', error)
        return{status:500, success:false, message:"internal server error"}
    }
}

module.exports={
    RegisterUser
}