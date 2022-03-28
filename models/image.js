const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
    image: {
        type: Buffer,
    },
    // question: {
    //     type: String,
    //     required: true,
    // },
    // name:String
});

module.exports = Image = mongoose.model("image", imageSchema);
