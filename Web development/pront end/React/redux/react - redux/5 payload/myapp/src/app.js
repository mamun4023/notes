import React from 'react';
import {Provider} from 'react-redux';
import Shop from './components/shop'
import store from './redux/cakes/store';


function App(){


	return(

		<>

			<Provider store = {store}>

				<Shop/>

			</Provider>



		</>
		)
}



export default App;