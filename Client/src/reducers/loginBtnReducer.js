
const initalState = false;
const changeLoginBoolValue = (state = initalState, action) => {
    switch (action.type) {
        case ("BOOLLOGIN"): return !state;
        // case ("BOOLFALSE"): return false;
        default: return state;
    }
}


export default changeLoginBoolValue;