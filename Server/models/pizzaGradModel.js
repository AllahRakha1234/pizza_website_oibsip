const mongoose = require("mongoose");

const pizzaGradSchema = mongoose.Schema({
    gradType: {
        type: String,
        required: true,
    },
    quantity: {
        // type: mongoose.Schema.Types.Mixed, // Use a dynamic data type for the nested object
        // type: Number,
        type: Object,
        required: true,
    },
    options: [String],
    image: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const pizzaGradModel = mongoose.model("pizzaGradientsCollection", pizzaGradSchema);

module.exports = pizzaGradModel;
