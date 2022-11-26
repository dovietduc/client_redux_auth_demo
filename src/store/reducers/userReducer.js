const intialStateUser = [];

function userReducer(state = intialStateUser, action) {

    switch(action.type) {
        case "GET_USER_LIST":
            return [...action.payload];
        default:
            return state;    
    }

}

export default userReducer;