const express = require("express");
const pizzaGradModel = require("../models/pizzaGradModel")
const router = express.Router();

const pizzaGradRouter = router.get("/getAllPizzaGradients", async (req, res) => {
    try {
        const pizzaGrad = await pizzaGradModel.find({});
        res.send(pizzaGrad)
    } catch (error) {
        res.json({ message: "Error while fetching pizza gradients ...." })
    }
})

module.exports = pizzaGradRouter;