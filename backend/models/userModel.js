const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName : {
        type:String,
        required:[true , "First name is required"],
    },

    lastName :{
        type:String,
        required:[true , "Last name is required"],
    },

    email :{
        type:String,
        required:[true , "Email is required"],
        unique:[true, "Email should be unique"],
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email'],

    },

    password: {
        type: String,
        required: true,
        minlength: 3,
        validate: {
            validator: function (value) {
               
                return /[A-Z]/.test(value) && /[0-9]/.test(value);
            },
            message: props => `Password must contain at least one uppercase letter and one number!`
        }
    },
    
    profilePic: {
        type: String
        //required: false, 
        
    },

    status: {
        type : String 
        //required : false
    },

    lastSeen :{
        type : Date 
        //required:false
    }, 
    
    friends :
        [
            {
                friendsID: {type : mongoose.Schema.Types.ObjectId ,  ref:"User"} 
            }
        ]
    
})


module.exports = mongoose.model("User" , userSchema)