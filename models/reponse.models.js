const mongoose =require('mongoose');


const reponseShema = mongoose.Schema ({
    Reponse :{
        type : String ,
        required :true ,
    },
    typetest :{
        type : String ,
        required :true ,
    },
    id:{
        type : String ,
        required :true ,
    },



});

module.exports = Reponse = mongoose.model('Reponse',reponseShema);