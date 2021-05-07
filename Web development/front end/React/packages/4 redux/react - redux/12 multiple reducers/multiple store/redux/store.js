
import {applyMiddleware, compose, createStore} from 'redux';
import RootReducer from "./rootReducer";
import logger from 'redux-logger';




const store  = createStore(RootReducer, compose(applyMiddleware(logger),
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
);


export default store;