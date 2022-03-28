const { type } = require('express/lib/response');
const mongoose =require('mongoose');


const questionSchema = mongoose.Schema ({
    question :{
        type : String ,
        required :true ,
    },
    Number :{
        type : String ,
        required :true ,
    },
    domaine :{
        type : String ,
        required :true ,
    
    },
    type:{
        type : String ,
        required :true ,
    }
    



});

module.exports = Question = mongoose.model('question',questionSchema);
