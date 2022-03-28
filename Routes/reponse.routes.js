const express = require('express');
const router = express.Router();
const Reponse =require('../models/reponse.models');
 

router.get("/reponse",async (req, res) => {
    try{

  await Reponse.find().then((result) => {
    res.send(result);
  });
}
catch(err){
    console.log(err);
}
});



router.post('/ajouter_reponse',async(req,res)=>{
    try{
    let new_reponse = new Reponse({

        Reponse : req.body.Reponse, //undefined !!!
        typetest :req.body.typetest,
        id :req.body.id //undefined !!!
        


    });

    await new_reponse.save()
    res.status(200).send({msg:'enregistrement effectue avec succes!',new_reponse})}
    catch(err){
        console.log(err);
    }
});
module.exports = router ;