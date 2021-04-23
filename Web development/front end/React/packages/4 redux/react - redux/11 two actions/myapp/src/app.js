import React from 'react';
import store from './redux/store';
import {Provider} from 'react-redux';
import Nav from './components/nav';


function App(){

	return(
		<>

		  <Provider store = {store}>

		     <Nav/>



		  </Provider>




			
		  

		</>
		)
}



export default App;