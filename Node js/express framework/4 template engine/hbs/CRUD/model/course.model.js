const mongoose = require('mongoose');


var CourseSchema = new mongoose.Schema({
	courseName : {
		type : String,
		required : "required"
	},

	courseId : {
		type : String
	},
	courseDuration : {
		type : String
	},

	courseFree : {
		type : String
	}
});


mongoose.model("course", CourseSchema);