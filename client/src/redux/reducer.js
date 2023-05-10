import {GET_DATA, GET_TEMPERAMENTS, SEARCH_BY_ID, SEARCH_BY_NAME} from "./actions-types";

const initialState = {
    dogs: [],
    temperaments: [],
    breedDetail: [],
    breedsForFilter:[]
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        default: return state;

        case GET_DATA:
            return {
                ...state,
                dogs: action.payload
            };
        
        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperaments: action.payload,
            };
        
        case SEARCH_BY_ID:
            return{
                ...state,
                breedDetail: action.payload,
            }
        
        case SEARCH_BY_NAME:
            return {
                ...state,
                breedsForFilter: action.payload,
            };
    }
}

export default reducer;