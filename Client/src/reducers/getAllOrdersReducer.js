
const getAllOrdersReducer = (state = { allOrders: [] }, action) => {
    switch (action.type) {
        case "GET_ORDER_DATA_REQUEST":
            return {
                ...state
            }
        case "GET_ORDER_DATA_SUCCESS":
            return {
                allOrders: action.payload,
            }
        case "GET_ORDER_DATA_FAIL":
            return {
                error: action.payload,
            }
        default: {
            return state;
        }
    }
}

export default getAllOrdersReducer;