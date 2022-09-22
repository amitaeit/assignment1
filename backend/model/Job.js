const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    userId: { 
        type: String,
        require: true
    },
    company: { 
        type: String,
        require:true
    },
    title: {
        type: String,
        require:true
    },
    duration:{
        type:String,
    },
    project:{
        type:String,
    }
})

module.exports = mongoose.model('Job', jobSchema);