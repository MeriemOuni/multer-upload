const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
    image: {
        type: Buffer,
    },
});

module.exports = Image = mongoose.model("image", imageSchema);
