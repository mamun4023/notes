
const express = require('express');
const app = express();
const multer = require('multer');




const upload = multer({
	dest : 'image',
	limits : {
		fileSize : 1000000    // size in byte 
	},
	fileFilter(req, file, cb){
		if(!file.originalname.match(/\.(doc|docx)$/)){    // regExp
			return cb(new Error("please upload word and doc file"))
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




