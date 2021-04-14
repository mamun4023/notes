const express = require('express');
const app = express();
const expressHandlebars = require('express-handlebars');
const path = require('path');



app.engine('hbs', expressHandlebars({
	extname : "hbs",
	defaultLayout : "mainLayout",
	layoutsDir : __dirname + "/views/layout"
}))


app.set('view engine', 'hbs');


app.get('/', (req, res)=> {
	res.render('list', {})
})






app.listen(3000, ()=> {
	console.log("server is running...")
})