const mongoose = require('mongoose');
const validator = require('validator');


// creating model 
const Task = mongoose.model('Task', {
	title : {
		type : String,
		required : true,
		trim : true
	},

	description : {
		type : String,
		required : true,

	}
})


module.exports = Task;