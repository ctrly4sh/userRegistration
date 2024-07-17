const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        requried: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    position: {
        type: String,
        default : true
    },
    password: {
        type: String,
        requried: true
    },
})

const user = mongoose.model('user' , userSchema);
module.exports = user;