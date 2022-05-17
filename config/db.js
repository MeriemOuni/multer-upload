
const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://Meriem:meriem1234567@cluster0.nsiyc.mongodb.net/mern-v6?retryWrites=true&w=majority');
        console.log('mongo db connected ');
    }
    catch(err){
        console.error("fail to connect",err);
    }
    
}
module.exports = connectDB;