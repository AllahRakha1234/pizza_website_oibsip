
const initialState = false;
const showOrderPlacedOrDeliverReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("SHOW_ORDERPLACED_OR_DELIVER"):
            {
                return !state;
            }
        default: return state;

    }
}

export default showOrderPlacedOrDeliverReducer;