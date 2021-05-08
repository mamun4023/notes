import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

// load action
import {userLoginRequest} from './redux/cake/actions';


function Container(){

   
    const [data, setData] = useState({
        name :  ""
    });
   
    const dispatch = useDispatch();

    const onsubmitHandler = (e)=> {
        e.preventDefault();
     
        console.log(data)
        dispatch(userLoginRequest(data))
    }
    
    const handleChange = e => {
        setData({...data, name: e.target.value})
      };

    return (
        <div>
         
           

            {/* submit data */}
            <form onSubmit = {onsubmitHandler}>
                <input 
                    type = "text"
                    name = "name"
                    value = {data.name}
                    onChange = {handleChange}
               
                />
                <button> add </button>
                <h4> {data.name} </h4>
            </form>
        </div>
    )


}



export default Container;