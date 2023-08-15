
const userDataForOrderReducer = (state = { pizzasGrad: [] }, action) => {
    switch (action.type) {
        case "ORDER_DATA_REQUEST":
            return {
                ...state
            }
        case "ORDER_DATA_SUCCESS":
            return {
                pizzasGrad: action.payload,
            }
        case "ORDER_DATA_FAIL":
            return {
                error: action.payload,
            }
        default: {
            return state;
        }
    }
}

export default getAllPizzaGradientsReducer;
