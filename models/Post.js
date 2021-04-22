const mongoose =require('mongoose');
const PostSchema= mongoose.Schema({

    Instrument:{
        type:String,
        require:true,
    },
    
    Price:{
        type:String,
        require:true,
    },

    Color:{
        type:String,
        require:true,
    },

    Year:{
        type:String,
        require:true,

    },

    Comments:{
        type:String,
        require:true,
    },

    Date:{
        type:Date,
        default:Date.now
    }
});



module.exports=mongoose.model('Posts',PostSchema);