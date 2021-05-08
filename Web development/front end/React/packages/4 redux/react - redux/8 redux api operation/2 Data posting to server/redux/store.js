
import {applyMiddleware, compose, createStore} from 'redux';
import Reducer from "./cake/reducers";
import logger from 'redux-logger';
import thunk from 'redux-thunk';



const store  = createStore(Reducer, compose(applyMiddleware(logger,thunk),
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
);


export default store;