// const express = require("express");
// const pizzaGradModel = require("../models/pizzaGradModel");
// const router = express.Router();

// const updatePizzaGradientsOrderRouter = router.post("/updatePizzaGradientsOrder", async (req, res) => {

//     let { gradients, decFactor } = req.body;
//     let notAvailableGradients = [];
//     let quantityCheckGtZero = gradients.map(
//         async (option) => {
//             let pizza = await pizzaGradModel.findOne({ options: option });
//             let updatedQuantity = pizza.quantity[option] - parseInt(decFactor);
//             console.log("pizza.quantity[option] - parseInt(decFactor);: ", pizza.quantity[option] - parseInt(decFactor));
//             console.log("updatedQuantity: ", updatedQuantity);
//             if (updatedQuantity >= 0) {
//                 return true;
//             }
//             else {
//                 notAvailableGradients[option] = pizza.quantity[option]
//                 return false;
//             }
//         }
//     )
//     const results = await Promise.all(quantityCheckGtZero)
//     if (results.every((result) => result === true)) {
//         // res.send(quantityCheckGtZero);
//         try {
//             // const { gradients, decFactor } = req.body;
//             var quantityFlag = true;
//             // console.log("req.body", req.body);

//             const optionsWithLowQuantity = []; // Array to store options with low quantity

//             const updatePromises = gradients.map(async (option) => {
//                 try {
//                     const pizza = await pizzaGradModel.findOne({ options: option });

//                     if (!pizza) {
//                         console.log(`Pizza option "${option}" not found.`);
//                         return false; // Indicate failed update
//                     }
//                     const updatedQuantity = pizza.quantity[option] - parseInt(decFactor);
//                     // if (updatedQuantity < 0) {
//                     //     quantityFlag = false;
//                     //     console.log(`Pizza option "${option}" Quantity Is Not Enough.`);
//                     //     res.json({ message: `Order Can't Be FullFill Due To Non-availablity of ${option}` });
//                     // }
//                     if (updatedQuantity < 20) {
//                         console.log(`Pizza option "${option}" quantity is now less than 20.`);
//                         optionsWithLowQuantity.push(option); // Store option with low quantity
//                     }

//                     await pizzaGradModel.updateOne({ options: option },
//                         { $set: { [`quantity.${option}`]: updatedQuantity } });
//                     return true; // Indicate successful update

//                 } catch (error) {
//                     console.error(`Error updating option ${option}:`, error);
//                     return false; // Indicate failed update
//                 }
//             });

//             const updateResults = await Promise.all(updatePromises);
//             console.log("updateResults", updateResults);
//             if (updateResults.every(result => result === true)) {
//                 if (optionsWithLowQuantity.length > 0) {
//                     res.json({ message: "Success", optionsWithLowQuantity: optionsWithLowQuantity });
//                 } else {
//                     res.json({ message: "Success" });
//                 }
//             } else {
//                 res.send("Fail");
//             }
//         } catch (error) {
//             res.status(500).json({ message: "Error while updating pizza gradients ....", error: error.message });
//         }
//     }
//     else {
//         console.log("notAvailableGradients: ", notAvailableGradients);
//         res.send(notAvailableGradients)
//         // res.send("Fail");
//     }


// });

// module.exports = updatePizzaGradientsOrderRouter;

const express = require("express");
const pizzaGradModel = require("../models/pizzaGradModel");
const router = express.Router();

const updatePizzaGradientsOrderRouter = router.post("/updatePizzaGradientsOrder", async (req, res) => {

    let { gradients, decFactor } = req.body;
    let notAvailableGradients = []; // Use an object to store key-value pairs
    let quantityCheckGtZero = gradients.map(
        async (option) => {
            let pizza = await pizzaGradModel.findOne({ options: option });
            let updatedQuantity = pizza.quantity[option] - parseInt(decFactor);
            console.log("pizza.quantity[option] - parseInt(decFactor);: ", pizza.quantity[option] - parseInt(decFactor));
            console.log("updatedQuantity: ", updatedQuantity);
            if (updatedQuantity >= 0) {
                return true;
            }
            else {
                let temp = `${option}: ${pizza.quantity[option]} `;
                notAvailableGradients.push(temp);
                return false;
            }
        }
    )
    const results = await Promise.all(quantityCheckGtZero);

    if (results.every((result) => result === true)) {
        try {
            const optionsWithLowQuantity = [];

            const updatePromises = gradients.map(async (option) => {
                try {
                    const pizza = await pizzaGradModel.findOne({ options: option });

                    if (!pizza) {
                        console.log(`Pizza option "${option}" not found.`);
                        return false; // Indicate failed update
                    }
                    const updatedQuantity = pizza.quantity[option] - parseInt(decFactor);

                    if (updatedQuantity < 0) {
                        console.log(`Pizza option "${option}" Quantity Is Not Enough.`);
                        return false;
                    }

                    await pizzaGradModel.updateOne({ options: option }, { $set: { [`quantity.${option}`]: updatedQuantity } });

                    if (updatedQuantity < 20) {
                        console.log(`Pizza option "${option}" quantity is now less than 20.`);
                        optionsWithLowQuantity.push(option);
                    }

                    return true; // Indicate successful update
                } catch (error) {
                    console.error(`Error updating option ${option}:`, error);
                    return false; // Indicate failed update
                }
            });

            const updateResults = await Promise.all(updatePromises);

            if (updateResults.every(result => result === true)) {
                if (optionsWithLowQuantity.length > 0) {
                    res.json({ message: "SuccessAndLess", optionsWithLowQuantity: optionsWithLowQuantity });
                } else {
                    res.json({ message: "Success" });
                }
            } else {
                res.send("Fail");
            }
        } catch (error) {
            res.status(500).json({ message: "Error while updating pizza gradients ....", error: error.message });
        }
    }
    else {
        console.log("notAvailableGradients: ", notAvailableGradients);
        res.json({ message: "NotEnough", notAvailableGradients: notAvailableGradients }); // Send the object as JSON response
    }
});

module.exports = updatePizzaGradientsOrderRouter;
