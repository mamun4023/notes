
const express = require('express');
const app = express();
const multer = require('multer');




const upload = multer({
	dest : 'image',
	limits : {
		fileSize : 1000000    // size in byte 
	},
	fileFilter(req, file, cb){
		if(!file.originalname.endsWith('.pdf')){
			return cb(new Error("please upload a PDF file"))
		}

		cb(undefined, true)
	}
});

app.post('/upload', upload.single('upload'), (req, res)=> {
	res.send("success")
})







app.listen(4000, ()=> {
	console.log("server is running...")
})




