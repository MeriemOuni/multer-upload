const express = require('express');
const app = express();
const bodyParser= require("body-parser");



const connectDB = require('./config/db.js')
connectDB();
// load config
require("dotenv").config()
// parse application/json
app.use(express.json());

//routes
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/image',require('./Routes/image.routes'));


//server

app.listen(5000, () =>
{
    console.log('listing on port 5000');
})