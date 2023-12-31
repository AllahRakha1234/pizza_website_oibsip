
const getAllPizzasReducer = (state = { pizzas: [] }, action) => {
    switch (action.type) {
        case "GET_ALL_PIZZAS_REQUEST":
            return {
                ...state,
                loading: true,
            }
        case "GET_ALL_PIZZAS_SUCCESS":
            return {
                pizzas: action.payload,
                loading: false,
            }
        case "GET_ALL_PIZZAS_FAIL":
            return {
                error: action.payload,
                loading: false,
            }
        default: {
            return state;
        }
    }
}

export default getAllPizzasReducer;