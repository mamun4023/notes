const mongoose = require('mongoose');
const validator = require('validator');


// creating model 
const User = mongoose.model('User', {
	name : {
		type : String,
		required : true,
		trim : true
	},

	email : {
		type : String,
		required : true,
		lowerCase: true,
		validate(value){
			if(!validator.isEmail(value)){
				throw new Error("Email is invalid")
			}
		}
	},

	password : {
		type : String,
		required : true,

	}
})


module.exports = User;