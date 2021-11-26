import * as Type from './types';


export const withdraw = (amount)=>{
    return{
        type : Type.WITHDRAW,
        payload : amount
    }
}


export const deposit = (amount)=>{
    return{
        type : Type.DEPOSIT,
        payload : amount
    }
}





