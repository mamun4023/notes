import {BUY_CAKE} from './types';


const initialState = {
	numOfCakes : 10
}


const reducer = (state = initialState, action)=> {
	switch(action.type){
		case BUY_CAKE:
			return {
				... state,
				numOfCakes : state.numOfCakes - action.payload
			}

		default:
			return state
	}
}



export default reducer;