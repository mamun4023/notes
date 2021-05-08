import {ADD_USER} from "./types";


const initialState = {
    name : ""
}


const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                name: action.payload
            };
        default:
            return state;
    }
}



export default Reducer;