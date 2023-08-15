
const initialState = false;
const showCheckOutBtnReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("SHOW_CHECKOUT_OR_NOT"):
            {
                return !state;
            }
        default: return state;

    }
}

export default showCheckOutBtnReducer;