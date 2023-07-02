const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    room: {
        type: String,
        required: true,
    },
});

const UserMessage = mongoose.model("UserMessage", UserSchema);

module.exports = UserMessage;