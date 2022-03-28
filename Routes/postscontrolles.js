const express = require('express');
const app = express();
require('./config/question');
require('./config/reponse');





app.get("/questions",async (req, res) => {
    try{

  await Question.find({}).then((result) => {
    res.send(result);
  });
}
catch(err){
    console.log(err);
}
})



/*app.delete('/delete/:id',async(req,res)=>{
    try{

        await Etudiant.findOneAndDelete({id:req.params.id})
        res.send("supprimé avec succées !!!")
    }
    catch(err){
        res.send(err);
    }
});*/




app.post('/ajouter_question',async(req,res)=>{
    try{
    let new_question = new Question({

        question: req.body.question, //undefined !!!
        Number:req.body. Number,
        domaine:req.body.domaine,
        type:req.body.type //undefined !!!
        


    });

    await new_question.save()
    res.send('enregistrement effectue avec succes!')}
    catch(err){
        console.log(err);
    }
});

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

app.get("/reponse",async (req, res) => {
    try{

  await Reponse.find({}).then((result) => {
    res.send(result);
  });
}
catch(err){
    console.log(err);
}
});


app.post('/ajouter_reponse',async(req,res)=>{
    try{
    let new_reponse = new Reponse({

        Reponse : req.body.Reponse, //undefined !!!
        typetest :req.body.typetest,
        id :req.body.id //undefined !!!
        


    });

    await new_reponse.save()
    res.send('enregistrement effectue avec succes!')}
    catch(err){
        console.log(err);
    }
});
/*app.get("/questioncontrolles",async (req, res) => {
    try{

  await questioncontrolles.find({}).then((result) => {
    res.send(result);
  });
}
catch(err){
    console.log(err);
}
});*/

