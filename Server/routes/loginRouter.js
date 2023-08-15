const express = require("express");
const signupModel = require("../models/singupModel");
const router = express.Router();

const loginRouter = router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const checkEmail = await signupModel.findOne({ email: email, password: password });
        if (checkEmail) {
            const user = {
                name: checkEmail.name,
                _id: checkEmail._id,
                email: checkEmail.email,
                msg: "Exist",
                isAdmin: false
            }
            // res.json("Exist");
            res.json(user);
        }
        else {
            res.json({ msg: "NotExist" });
            // const name = checkEmail.name;
            // res.json({ msg: "NotExist", name: name });
        }
    } catch (error) {
        res.json({ message: "Error Occured While Registering " });
    }

})

module.exports = loginRouter;