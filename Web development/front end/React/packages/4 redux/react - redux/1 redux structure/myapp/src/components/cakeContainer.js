import React from 'react';
import {connect} from 'react-redux';
import {buyCake} from '../redux';

function CakeContainer(props){

	return(
		<>
		   <h3> Buy Cake {props.noOfCakes} </h3>
		   <button onClick = {props.buyCake} > buy</button> 
		</>

		)
}


const mapStateToPros = state =>{
	
	
	return{
		noOfCakes : state.noOfCakes
	}
}

const mapDispatchToProps = dispatch => {
	return{
		buyCake: ()=> dispatch(buyCake())
	}
}


export default connect(mapStateToPros, mapDispatchToProps) (CakeContainer);