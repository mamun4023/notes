import * as Types from './types';


export const increment = (number)=>{
    return{
        type : Types.INCREMENT,
        payload : number
    }
}


export const decrement = (number)=>{
    return{
        type : Types.DECREMENT,
        payload : number
    }
}


