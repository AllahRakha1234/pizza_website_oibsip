
const getAllPizzaGradientsReducer = (state = { pizzasGrad: [] }, action) => {
    switch (action.type) {
        case "UPDATE_PIZZA_GRADIENT_REQUEST":
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
