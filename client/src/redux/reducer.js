import {GET_DATA} from "./actions-types";

const initialState = {
    dogs: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        default: return state;

        case GET_DATA:
            return {
                ...state,
                dogs: action.payload
            }
    }
}

export default reducer;