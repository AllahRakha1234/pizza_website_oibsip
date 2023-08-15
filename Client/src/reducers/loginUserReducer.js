
const loginUserReducer = (state = {}, action) => {
    switch (action.type) {
        case ("LOGIN_USER_REQUEST"): {
            return {
                loading: true
            }
        }
        case ("LOGIN_USER_SUCCESS"): {
            return {
                loading: false,
                resFromDbForLogin: action.payload
            }
        }
        case ("LOGIN_USER_FAIL"): {
            return {
                loading: false,
                resFromDbForLogin: action.payload
            }
        }
        default: return state;
    }
}

export default loginUserReducer;