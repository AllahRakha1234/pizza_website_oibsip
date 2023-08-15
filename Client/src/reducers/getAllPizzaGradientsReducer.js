
const getAllPizzaGradientsReducer = (state = { pizzasGrad: [] }, action) => {
    switch (action.type) {
        case "GET_ALL_PIZZAS_GRAD_REQUEST":
            return {
                ...state
            }
        case "GET_ALL_PIZZAS_GRAD_SUCCESS":
            return {
                pizzasGrad: action.payload,
            }
        case "GET_ALL_PIZZAS_GRAD_FAIL":
            return {
                error: action.payload,
            }
        default: {
            return state;
        }
    }
}

export default getAllPizzaGradientsReducer;


// const getAllPizzaGradientsReducer = (state = { pizzaGradients: [] }, action) => {
//     switch (action.type) {
//         case ("GET_ALL_PIZZA_GRADIENTS"):
//             return {
//                 pizzaGradients: action.payload
//             }
//         default: {
//             return state;
//         }
//     }
// }