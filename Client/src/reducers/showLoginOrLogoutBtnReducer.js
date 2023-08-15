
const initialState = false;
const showLoginOrLogoutBtnReducer = (state = initialState, action) => {
    switch (action.type) {
        case ("SHOW_LOGOUT_OR_LOGIN"):
            {
                return !state;
            }
        default: return state;

    }
}

export default showLoginOrLogoutBtnReducer;