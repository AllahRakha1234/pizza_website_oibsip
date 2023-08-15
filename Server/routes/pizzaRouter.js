const express = require("express")
const pizzaModel = require("../models/pizzaModel")
const router = express.Router()

const pizsaRouter = router.get("/getAllPizzas", async (req, res) => {
    try {
        const pizzas = await pizzaModel.find({});
        res.send(pizzas);
    } catch (error) {
        res.json({ message: error })
    }
});

module.exports = pizsaRouter;