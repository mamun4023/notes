
const express = require('express');
const  app = express();
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require("path");
const fs = require('fs');




app.use(bodyParser.urlencoded({extended : true}))


const MongoClient = require('mongodb').MongoClient
const myurl = 'mongodb://localhost:27017';

MongoClient.connect(myurl, (err, client) => {
  if (err) return console.log(err)
  db = client.db('test') 
})









app.get('/', (req, res)=> {
	res.sendFile(__dirname + "/public/index.html")
})

/*
 basic multer setting
 1. include multer package
 2. define multer storage 
 3. make route for upload image 


*/




// make store 

const multerStorage = multer.diskStorage({
	destination : "./uploads/pics",
	filename : (req, file, cb)=> {
		cb(null, file.fieldname +"-"+Date.now() + path.extname(file.originalname))
	}
})



const upload = multer({
	storage : multerStorage
})




app.post('/uploadphoto', upload.single('picture'), (req, res) => {
    var img = fs.readFileSync(req.file.path);
 var encode_image = img.toString('base64');
 // Define a JSONobject for the image attributes for saving to database
 
 var finalImg = {
      contentType: req.file.mimetype,
      image:  new Buffer(encode_image, 'base64')
   };
db.collection('quotes').insertOne(finalImg, (err, result) => {
  	console.log(result)

    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  
    
  })
})





app.listen(3000, ()=> {
	console.log('server is running...')
})



