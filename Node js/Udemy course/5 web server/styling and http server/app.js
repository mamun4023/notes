
const express = require('express');
const app = express();
const path = require('path');


// route css file 
app.use('/cssFile', express.static(__dirname + "/style"));

// simple HTTP server
app.get('/', function(req, res){
	res.sendFile('index.html', {root: path.join(__dirname, "./public")});
})


app.listen(3000,()=> {
	console.log("Server is running....");
})