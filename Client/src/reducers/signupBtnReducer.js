

const initalState = false

const changeSignUpBoolValue = (state = initalState, action) => {
    switch (action.type) {
        case ("BOOLSIGNUP"): return !state;
        default: return state;
    }
}

export default changeSignUpBoolValue;