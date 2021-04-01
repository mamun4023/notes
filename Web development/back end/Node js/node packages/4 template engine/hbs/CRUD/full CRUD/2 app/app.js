
const express = require("express");
const app = express();
const expressHandlebars = require("express-handlebars")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended : true}))


app.engine("hbs", expressHandlebars({
	extname : "hbs",
	defaultLayout : "mainLayout",
	layoutsDir : __dirname + "/views"
}))


app.set('view engine', 'hbs')

// make database connection
mongoose.connect("mongodb://127.0.0.1:27017/table", (err)=> {
	if(!err)
		console.log("DB is connected");
})


// make Schema

const userSchema = new mongoose.Schema({
	name : String,
	email : String
})


const userModel = new mongoose.model("userModel", userSchema);





// get data list
app.get('/',(req, res)=> {
  	
  	userModel.find((err, data)=> {
  		if(err)
  			res.send("Data is not found")
  		else{

  			
  			const objects = {
  				students : data.map(d=> {
  					return{
  						name : d.name,
  						email : d.email,
  						id : d._id
  					}
  				})
  			}

  	
  			res.render("list", {students : objects.students})
  		}
  	})

	
})

app.get('/insert',(req, res)=> {
	res.render("insert", {})
})



// save new new record 

app.post('/save_new_record', (req, res)=> {
	const data = new userModel({
		name  : req.body.name,
		email : req.body.email
	})


	data.save()
	.then(()=> {
		res.redirect("/")
	})
	.catch((err)=> {
		res.send("Err is happened" + err)
	})
})



// Delete an elements

app.get('/delete/:id', (req, res)=> {
	userModel.findByIdAndRemove(req.params.id, (err)=> {
		if(!err){
			res.redirect('/')
		}
	} )
})



app.get('/update/:id', (req, res)=> {
	
	userModel.findById(req.params.id, (err, data) => {
		if(err)
			res.send("Data not found")
		else{
			
			const objects ={
				name : data.name,
				email : data.email,
				id : data._id
			}
			res.render("update", { students : objects})

		}
	})

	
})


app.post('/update_data/:id', (req, res)=> {

	userModel.findByIdAndUpdate({_id: req.params.id}, {name: req.body.name, email: req.body.email},(err)=> {
		if(!err){
			res.redirect("/");
		}
	})

})



app.listen(3000,()=> {
	console.log("server is running...");
})