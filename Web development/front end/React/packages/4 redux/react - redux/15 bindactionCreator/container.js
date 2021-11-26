import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as ActionCreator from './actions';
import {bindActionCreators} from 'redux';

function Redux(){

    const amount = useSelector(state => state.amount)
    const dispatch = useDispatch();
  
    const {withdraw, deposit} = bindActionCreators(ActionCreator, dispatch)
    console.log(withdraw)

    return(
        <>
           
                {amount}
                <button onClick = {() => withdraw(10)} > withdraw </button>
                <button onClick = {()=> deposit(10)} > deposit </button>
            
        </>
    )
}

export default Redux;