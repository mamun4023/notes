const connection  = require('./model/connection');
const express = require("express");
const app = express();
const path = require('path');
const expressHandlebars = require('express-handlebars');
const bodyparser = require('body-parser');



app.use(bodyparser.urlencoded({
	extended : true
}));

app.engine('hbs', expressHandlebars({
	extname : "hbs",
	defaultLayout : "mainlayout",
	layoutsDir : __dirname + "/views/layouts"
}));

app.set("view engine", "hbs")


app.get('/', (req, res)=> {
	//res.send("<h3> Hello wold </h3>")
	res.render('index', {})
})


app.listen(3000, ()=> {
	console.log("server is running...")
})

