const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const fs = require("fs");
const path = require('path');



app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

const db_string = "mongodb://127.0.0.1:27017/imageDB";

mongoose.connect(db_string,{useNewUrlParser : true, useUnifiedTopology : true }, (err)=> {
	if(!err){
		console.log("DB is connected");
	}
})


// create model
var imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});


const imageModel = mongoose.model("imageModel", imageSchema);




var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });



app.get('/', (req,res)=> {
	res.sendFile(__dirname + "/public/index.html")
})





// post route
app.post('/upload', upload.single('image'), (req, res, next) => {

	var obj = {
		name: req.body.name,
		desc: req.body.desc,
		img: {
			data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
			contentType: 'image/jpg'
		}
	}
	imageModel.create(obj, (err, item) => {
		if (err) {
			console.log(err);
		}
		else {
			// item.save();
			res.send("image is saved");
		}
	});
});










app.listen(3000, ()=> {
	console.log("server is running....");
})


