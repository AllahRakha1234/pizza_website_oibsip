const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/PizzaWebsite",)
    .then(() => {
        console.log("Monogodb Connected Sunccesfully");
    })
    .catch((error) => {
        console.log("Conection Failed ", error);
    })


const signUpSchema = new mongoose.Schema({
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
})

const signupCollection = mongoose.model("collection", signUpSchema);

module.exports = signupCollection;