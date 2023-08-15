
const initialState = false;
const showCheckOutOrOrderPlacedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("SHOW_CHECKOUT_OR_ORDERPLACED"):
            {
                return !state;
            }
        default: return state;

    }
}

export default showCheckOutOrOrderPlacedReducer;