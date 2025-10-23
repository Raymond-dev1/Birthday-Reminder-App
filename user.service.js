const User= require('./user.models')

const RegisterUser = async({email, username, dob})=>{
    try{
        const existingUser= await User.findOne({ email })
        if(existingUser){
            return{status:409, success:false, message:"User Already Exists"}
        }
        const newUser= await User.create({email, username, dob})
        return{status:201, success:true, message:"User registered Successfully", data:newUser}
    }catch(error){
        console.error('Error in RegisterUser', error)
        return{status:500, success:false, message:"internal server error"}
    }
}


const getAllUsers =async()=>{
    try{
        const users= await User.find({})
        return users
    }catch(error){
        console.error('Error in getAllUsers', error)
        throw error
    }
}


const getUserByEmail= async({email})=>{
    try{
        const user= await User.findOne({email})
        if(!user){
            return{status:404, success:false, message:"User not found"}
        }
        return user
    }catch(error){
        console.error('Error in getUserByEmail', error)
        throw error
    }
}

const deleteUserByEmail= async({email})=>{
    try{
        const user= await User.findOne({ email})
        if(user){
            await user.deleteOne(user)
            return{status:200 , message:"user deleted successfully" ,data: user}
        }else{
            return{status:400, success:false, message:"user not found"}    
        }
    }catch(error){
        console.error('Error in deleteUserByEmail', error)
        return{status:500, success:false, message:"internal server error" }
}
}

module.exports={
    RegisterUser,
    getUserByEmail,
    deleteUserByEmail,
    getAllUsers
}