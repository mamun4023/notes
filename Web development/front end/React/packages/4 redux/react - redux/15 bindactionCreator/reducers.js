import * as Type from './types';

const initialState = {
    amount : 10
}


const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case Type.DEPOSIT:
            return{
                ...state,
                amount : state.amount + action.payload
            }
        case Type.WITHDRAW:
            return{
                ...state,
                amount : state.amount - action.payload
            }
    
        default:
            return state
    }
}


export default reducer;