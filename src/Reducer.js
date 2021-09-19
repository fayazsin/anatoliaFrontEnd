export const initialState = {
    cart: [],
    userInfo: null,
    recipient: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, userInfo: action.item };
        case "LOGOUT":
            return { ...state, userInfo: action.item };
        case "UPDATE":
            return { ...state, userInfo: action.item };
        default:
            return state;

    }
}
export default reducer;