
import { useState } from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from './actions';

function Container(props){
     const [count] = useState(2);

     const incrementHandler = ()=>{
         props.increment(count)
     }

     const decrementHandler = ()=>{
         props.decrement(count)
     }
    return(
        <>

                 {props.amount}
                 <button onClick = {incrementHandler} > increment </button>
                 <button onClick = {decrementHandler} > decrement </button>
        </>
    )
}

const mapStateToProps = state =>{
    return{
        amount : state.values
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        increment :(amount)=> dispatch(increment(amount)),
        decrement :(amount)=> dispatch(decrement(amount)),
    
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Container);
