const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/test",{ useNewUrlParser: true },(err)=> {
	if(!err)
		console.log("Database connected")
	else 
		console.log("Database not connected !")
})


const Course = require('./course.model');

