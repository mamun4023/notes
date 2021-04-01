import React, {useState}from 'react';
import {buyCake} from '../redux/cakes/actions';
import {connect} from "react-redux";

function Shop(props){

	const [number, setNumber] = useState(1);

	return(

		<>

			<h3> total cakes :{props.numOfCakes} </h3>
			<input type = 'text' value = {number} onChange = {e => setNumber(e.target.value)}  />
			<button onClick = {()=> props.buyCake(number)}> buy {number}</button>
            

		</>
		)
}

const mapStateToProps = state => {
	return{
		numOfCakes : state.numOfCakes
	}
}

const mapDispatchToProps = dispatch => {
	return {
		buyCake : (number)=> dispatch(buyCake(number))
	}
}

export default connect (mapStateToProps, mapDispatchToProps) (Shop);