import {createStore} from 'redux';
import reducer from './reducers';

const Store = createStore(reducer);


export default Store;