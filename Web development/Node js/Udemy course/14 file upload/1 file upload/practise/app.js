
const express = require('express');
const app = express();
const multer = require('multer');



const upload = multer({
	dest : 'image'
});

app.post('/upload', upload.single('upload'), (req, res)=> {
	res.send("success")
})







app.listen(4000, ()=> {
	console.log("server is running...")
})