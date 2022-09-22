const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userId: { 
        type: String,
        require: true
    },
    name: { 
        type: String,
        require:true
    },
    role: {
        type: String,
        require:true
    },
    email:{
        type:String,
    },
    contactno:{
        type:String,
    },
    password:{
        type:String
    },
    address:{
        type:String
    },
    about:{
        type:String
    }
})

module.exports = mongoose.model('User', userSchema);