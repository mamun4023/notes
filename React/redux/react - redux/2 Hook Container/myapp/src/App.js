import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store'
import CakeContainer from './components/cakeContainer';
import HookContainer from './components/hookContainer';



function App(){


  return(
    <>
      <Provider store = {store}>
        <CakeContainer/>


        <HookContainer /> 
      </Provider>
    </>

    )
}


export default App;