
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from "./types";

import axios from 'axios';


const fetchUsersRequest = ()=> {
    return{
        type : FETCH_USERS_REQUEST
    }
}


const fetchUsersSuccess = users => {
    return{
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}


const fetchUsersFailure = error => {
    return{
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}


export const fetchUser = ()=> {
    return(dispatch) => {
        
        dispatch(fetchUsersRequest)

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                const users = res.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(err => {
                const errMsg = err.message
                dispatch(fetchUsersFailure(errMsg))
            })

    }
}