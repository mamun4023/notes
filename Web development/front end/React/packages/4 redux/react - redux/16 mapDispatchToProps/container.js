
import { useState } from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from './actions';

function Container(props){
     const [count, setCount] = useState(2);

     const handler = ()=>{
         props.increment(count)
     }
    return(
        <>

                 {props.amount}
                 <button onClick = {handler} > increment </button>
                
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
        increment :(count)=> dispatch(increment(count)),
    
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Container);