const express = require("express");
const pizzaGradModel = require("../models/pizzaGradModel");
const router = express.Router();

const updatePizzaGradRouter = router.post("/updatePizzaGradientsAdmin", async (req, res) => {
    try {
        const { option, quantity } = req.body;
        const filter = { "options": option };
        const update = { $set: { [`quantity.${option}`]: parseInt(quantity) } };
        const pizzaGrad = await pizzaGradModel.updateOne(filter, update);
        if (pizzaGrad) {
            res.send("Success")
        }
        else {
            res.send("Fail")
        }
    } catch (error) {
        res.json({ message: "Error while updating pizza gradients ...." })
    }
})

module.exports = updatePizzaGradRouter;