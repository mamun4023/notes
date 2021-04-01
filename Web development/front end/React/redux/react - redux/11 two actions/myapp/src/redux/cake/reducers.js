import {BUY_CAKE, ADD_CAKE} from './types';

const initialValues = {
	numOfCakes : 10
}

 const Reducer = (state = initialValues, action)=> {
	switch(action.type){
		case BUY_CAKE:
			return{
				...state, numOfCakes: state.numOfCakes - 1
			}

		case ADD_CAKE:
			return{
				...state, numOfCakes : state.numOfCakes + 1
			}

		default:
			return state	
	}
}


export default Reducer;