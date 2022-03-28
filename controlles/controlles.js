const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const question = require('../config/question');

class questioncontrolles {
    static getAllDoc = async(req, res) => {
        try{
            const result = await question.find()
            res.send(result)
        }
        catch(error){
            console.log(error)
        }
    }
}
module.exports = questioncontrolles ;