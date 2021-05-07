
import { combineReducers} from 'redux';

//  load reducers

import CakeReducer  from "./cake/reducers";
import IceReducer from './ice/reducers';


// root reducer
const RootReducer = combineReducers({
    cake : CakeReducer,
    ice : IceReducer

})



export default RootReducer;