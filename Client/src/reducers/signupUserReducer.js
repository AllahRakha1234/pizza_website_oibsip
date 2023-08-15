
const signupUserReducer = (state = {}, action) => {
    switch (action.type) {
        case ("REGISTER_USER_REQUEST"): {
            return {
                loading: true
            }
        }
        case ("REGISTER_USER_SUCCESS"): {
            return {
                loading: false,
                resFromDbForSignup: action.payload
            }
        }
        case ("REGISTER_USER_FAIL"): {
            return {
                loading: false,
                resFromDbForSignup: action.payload
            }
        }
        default: return state;
    }
}

export default signupUserReducer;