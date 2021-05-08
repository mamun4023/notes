import { ADD_USER } from './types';
import axios from 'axios';

export const userLoginRequest = (data) => {

    return (dispatch) => {
    axios.post(`http://localhost:3000/insert`,data)
    .then( userdata => 
        dispatch({
            type: ADD_USER,
            payload: userdata
        })
    )
    .catch( error => {
        console.log(error);
    });
}}
