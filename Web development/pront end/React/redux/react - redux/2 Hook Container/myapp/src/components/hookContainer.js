import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {buyCake} from '../redux';


function HookContainer(){

// access in the store state 
const numOfCakes = useSelector(state => state.noOfCakes)
const dispatch = useDispatch()
	return(
		<>

		 <h3> No of Cakes : {numOfCakes} </h3>
		 <button onClick = {()=> dispatch(buyCake())}> Buy</button>

		</>
		)
}


export default HookContainer;