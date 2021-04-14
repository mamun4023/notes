import {BUY_CAKE, ADD_CAKE} from './types';

export const buyCake = ()=> {
	return{
		type : BUY_CAKE
	}
} 


export const addCake = ()=> {
	return{
		type : ADD_CAKE
	}
}