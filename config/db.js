
const mongoose = require('mongoose');

const connectDB = async() => {
    try{
            const conn = await mongoose.connect("mongodb+srv://manaihadir:14017269@cluster.cseon.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
                console.log('mongo db connected ');
    }
    catch(err){
        console.error(err);

    }
    
}
module.exports = connectDB;