
import {BUY_CAKE} from './types';

const initialCakeState = {
    numOfcakes : 10
}




 const CakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
       case BUY_CAKE : 
            return{
                ...state,
                numOfcakes : state.numOfcakes - 1
            }
        
        default:
            return state
    }
}





export default CakeReducer;