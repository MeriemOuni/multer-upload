const express = require('express');
const req = require('express/lib/request');
const app = express();
const dotenv = require('dotenv');
const bodyParser= require("body-parser");
require('./models/question.models');
require('./models/reponse.models')
require('dotenv').config({path: './config/.env'})
const mongoose = require ('mongoose');

const connectDB = require('./config/db.js')
// load config
dotenv.config({path: './config/db.js'})
connectDB();

// parse application/json
app.use(bodyParser.json());

//routes
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/question',require('./Routes/question.routes'));
app.use('/api/reponse',require('./Routes/reponse.routes'));
app.use('/api/image',require('./Routes/image.routes'));


//server

app.listen(5000, () =>
{
    console.log('listing on port 5000');
})