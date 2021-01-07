const mongoose = require('mongoose');


// database connection
mongoose.connect('mongodb://127.0.0.1:27017/ddd', {
	useNewUrlParser : true,
	useCreateIndex : true
})
