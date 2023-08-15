const mongoose = require("mongoose")

const signupSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const singupModel = mongoose.model("signupcollection", signupSchema);

module.exports = singupModel;