import React from 'react';
import {connect} from 'react-redux';
import {buyCake, addCake} from '../redux/index';



function Nav(props){


	return(
		<>

			<h3> Buy Cake {props.numOfCakes} </h3>
			<button onClick = {props.buyCake} > buy </button>
			<button onClick = {props.addCake} >addCke </button>


		</>
		)
}





const mapStateToProps = state => {
	return{
		numOfCakes : state.numOfCakes
	}
}



const mapDispatchToProps = dispatch => {
	return{
		buyCake : ()=> dispatch(buyCake()),
		addCake : ()=> dispatch(addCake())
	}
}



export default connect(mapStateToProps, mapDispatchToProps)(Nav);