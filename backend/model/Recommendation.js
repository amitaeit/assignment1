const mongoose = require('mongoose');

const recommendationSchema = mongoose.Schema({
    userId: { 
        type: String,
        require: true
    },
    refreename: { 
        type: String,
        require:true
    },
    refreecompany: {
        type: String,
        require:true
    },
    refreejobtitle:{
        type:String,
    },
    refrraldate:{
        type:String,
    },
    reffraltext:{
        type:String
    }
})

module.exports = mongoose.model('Recommendation', recommendationSchema);