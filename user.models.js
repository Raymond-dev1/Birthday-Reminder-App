const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    dob:{
        type:Date,
        required:true
    }
})

const user = mongoose.model('user', userSchema)

 module.exports= user