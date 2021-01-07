import React from 'react';
import "./form.css"
import {useFormik} from 'formik';





function Form(){


const initialValues = {

 		firstName : "",
 		lastName : "",
 		email : "",
 		password : "",
 		confirmPassword : ""

}

 
 



const validate = (values) => {
	let errors = {};

		if(!values.firstName){
			errors.firstName = "Required !"
		}

		if(!values.lastName){
			errors.lastName = "Required !"
		}

		if(!values.email){
			errors.email = "Required !"

		}
		else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
			errors.email = "Invalid email format";
		}
		if(!values.password){
			errors.password = "Required !"
		}

		if(!values.confirmPassword){
			errors.confirmPassword = "Required !"
		}

		else if(values.confirmPassword != values.password){
			errors.confirmPassword = "password dont't match"
		}
	

	return errors;
}

const onSubmit = values => {
	console.log(values)
}


 const formik = useFormik({
 	  initialValues,
 	  onSubmit,
 	  validate

 })

	return(
		<>

		    <div className ="container">
		     <form onSubmit = {formik.handleSubmit}>
		    	<label> First Name : </label>
		    	<input name = "firstName" className = "form-control" type = "text" onChange = {formik.handleChange}  value = {formik.values.firstName}  onBlur = {formik.handleBlur}/>

		    		{ formik.touched.firstName && formik.errors.firstName?<div className = "message" >{formik.errors.firstName}</div> : null}	
		    	<label> Last Name : </label>
		    	<input name = "lastName" className = "form-control" type = "text" onChange = {formik.handleChange}  value = {formik.values.lastName} onBlur = {formik.handleBlur}/>
		    		
		    		{formik.touched.lastName && formik.errors.lastName?<div className = "message" >{formik.errors.lastName}</div> : null}	

		    	<label> Email :  </label>
		    	<input name = "email" className = "form-control" type = "email"  onChange = {formik.handleChange} value = {formik.values.email}  onBlur = {formik.handleBlur}/>
		    	
		    	   { formik.touched.email && formik.errors.email?<div className = "message" >{formik.errors.email}</div> : null}

		    	<label> Password : </label>
		    	<input name = "password" className = "form-control" type = "password" onChange = {formik.handleChange} value = {formik.values.password}  onBlur = {formik.handleBlur} />
		    		{ formik.touched.password && formik.errors.password?<div className = "message" >{formik.errors.password}</div> : null}	
		    	<label> Confirm Password : </label>
		    	<input name = "confirmPassword" className = "form-control"  type = "password"  onChange = {formik.handleChange} value = {formik.values.confirmPassword}  onBlur = {formik.handleBlur}/>
		    		{ formik.touched.confirmPassword && formik.errors.confirmPassword?<div className = "message" >{formik.errors.confirmPassword}</div> : null}	
		    	<hr/>
		    	<button className = "btn btn-primary btn-block"> Submit </button>
		      </form>
		    </div>

          

            


		</>

		)
}


export default Form;