const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
    image: {
        type: Buffer,
    },
    name: {
        type: String
    },
    email: {
        type: String
    }
});

module.exports = Image = mongoose.model("image", imageSchema);
