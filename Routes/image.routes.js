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
// const upload = multer({
//     dest: "images",
//     limits: { fileSize: 1000000 },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
//             cb(new Error("Please upload an image."));
//         }
//         cb(undefined, true);
//     },
// });
const upload = multer({
    storage: storage,
}).single("testimage");
router.get("/:_id", async (req, res) => {
    const { _id } = req.params;
    const image = await Image.find({ _id });
    res.status(200).send({ msg: "uploads file", image });
});

router.post("/uploads", upload, (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err);
        } else {
            const newimage = new Image({
                name:req.body.name,
                image: req.file.buffer,
                question: req.body.question,
            });
            res.set("Content-Type", "image/png");
            newimage
                .save()

                .then(() => res.status(200).send({ msg: "successufly uploudas", newimage }))
                .catch((err) => console.log(err));
        }
    });
});

module.exports = router;
