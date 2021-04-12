import React from 'react';
import{Link, Redirect} from 'react-router-dom';

class Admin extends React.Component{
    constructor(props){
        super(props);
        const token = localStorage.getItem("token");
        let loggedIn = true
        if(token === null){
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }


  render(){

    if(this.state.loggedIn === false){
        return <Redirect to = "/" />
    }
    return(
      <>
        <h1> Admin page  </h1>
        <Link to = "/logout" > logout</Link>
 


      </>
    )
  }
}


export default Admin;
