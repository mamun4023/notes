
import * as Types from "./types";


const intialState = {
    values : 10
}


const reducers = (state = intialState, action)=>{
    switch(action.type){
        case Types.INCREMENT:
            return{
                ...state,
                values : state.values + action.payload
            }


        case Types.DECREMENT:
            return{
                ...state,
                values : state.values - action.payload
            }
        
        default:
            return state
    }
}

export default reducers;