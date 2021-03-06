
const express = require('express');
const  app = express();

const multer = require('multer');
const path = require('path');



app.use('/', express.static(path.join(__dirname, 'public')));



// multer procedure
// 1. include multer package
// 2. create multer store
// 3. create post route for upload file



// set storage 
const multerStorage = multer.diskStorage({
	destination : "./uploads",
	filename : (req, file, cb)=> {
		cb(null, file.fieldname + "-" + Date.now())
	}
})


const upload = multer({storage : multerStorage})



app.post("/uploadfile", upload.single('myFile'), (req,res, next)=> {
	const file = req.file;
	if(!file){
		res.send("err is happened")

	}
	next();
})





app.listen(3000, ()=> {
	console.log('server is running...')
})
