
const getAllUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case "GET_ALL_USERS_REQUEST":
            return {
                ...state
            }
        case "GET_ALL_USERS_SUCCESS":
            return {
                users: action.payload
            }
        case "GET_ALL_USERS_FAIL":
            return {
                error: action.payload
            }
        default: {
            return state;
        }
    }
}

export default getAllUsersReducer;