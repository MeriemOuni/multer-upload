const express = require("express");
const router = express.Router();
const multer = require("multer");

const Image = require("../models/image");

const storage = multer.diskStorage({
    destination: "uploads",
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage: storage,
}).single("testimage");

router.get("/",async(req,res)=>{
    const image = await Image.find();
    res.status(200).send({ msg: "uploads file", image });
})

router.get("/:_id", async (req, res) => {
    const { _id } = req.params;
    const image = await Image.find({ _id });
    res.status(200).send({ msg: "uploads file", image });
});

router.post("/uploads", upload, async (req, res) => {
    
        try {
            const newimage = new Image({
                image: req.file.buffer,
                name: req.body.name,
                email: req.body.email
            });
            res.set("Content-Type", "image/png");
            await newimage.save()
            res.status(200).send({ msg: "successufly uploudas", newimage })
        } catch (err) {
            res.status(400).send({ msg: "successufly uploudas", err })
        }
    });


module.exports = router;
