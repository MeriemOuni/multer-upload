const express = require('express');
const router = express.Router();
const Question = require('../models/question.models');


router.get("/questions",async (req, res) => {
    try{

  await Question.find().then((result) => {
    res.send(result);
  });
}
catch(err){
    console.log(err);
}
});



/*app.delete('/delete/:id',async(req,res)=>{
    try{

        await Etudiant.findOneAndDelete({id:req.params.id})
        res.send("supprimé avec succées !!!")
    }
    catch(err){
        res.send(err);
    }
});*/




router.post('/ajouter_question',async(req,res)=>{
    try{
    let new_question = new Question({

        question: req.body.question, //undefined !!!
        Number:req.body. Number,
        domaine:req.body.domaine,
        type:req.body.type //undefined !!!
        


    });

    await new_question.save()
    res.status(200).send({msg:'enregistrement effectue avec succes!', new_question})}
    catch(err){
        console.log(err);
    }
});


//mongoose.set('useFindAndModify', false);
//const ObjectId = require('mongoose').type.ObjectId;

// modification 

/*app.put("/:id", (req, res) => 
{
    if(ObjectId.isvalid(req.params.id))
    return res.status(400).send("ID unknow : "+ req.params.id)

    const updatequestion = {
        question: req.body.question, //undefined !!!
        Number:req.body. Number,
        domaine:req.body.domaine,
        type:req.body.type
    };
    PostsModel.findByIdAndUpdate(
        req.params.id,
        {$set: updatequestion},
        {new : true},
        (err, docs) => {
            if(!err) res.send(docs);
            else console.log("Update error : " + err);
        }
    )
})*/
module.exports = router ;