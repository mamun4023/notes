
const express = require('express');
const app = express();
const expressHandlebar = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({extended : true}))

// db connect
mongoose.connect("mongodb://127.0.0.1:27017/student", (err)=> {
	console.log("DB is connected");
})


// create model 

const userSchema = new mongoose.Schema({
	name : String,
	email : String
})

const userModel = new mongoose.model("userModel", userSchema);



// set view engine

app.engine("hbs", expressHandlebar({
	extname : 'hbs',
	defaultLayout : "mainLayout",
	layoutsDir : __dirname + "/views"
}))



app.set("view engine", "hbs");



app.get('/', (req, res)=> {
  userModel.find((err, data)=> {
    if(err)
      res.send("data not found")
    else{
        const objects = {
        students : data.map(d=> {
          return{
            name : d.name,
            email: d.email,
            id : d._id
          }
        })
      }

      res.render("list", {


        students : objects.students
      })
    }
  })

})














app.get("/insert", (req, res)=> {
	res.render("insert", {})
})


app.post('/post_data', (req, res)=> {
	const data = new userModel(req.body)

	data.save().then(()=> {
		res.redirect('/')
	})
	.catch((err)=> {
		res.send("data is not saved")
	})
})



// delete data
app.get('/delete/:id', (req, res)=> {
	userModel.findByIdAndRemove(req.params.id, (err, data)=> {
		if(!err)
			res.redirect('/')
		else
			res.send("err is happend")
	})
})



// update route

app.get('/update/:id',(req, res)=> {

	userModel.findById(req.params.id, (err, data)=> {
		if(err)
			console.log("data not found");
		else{
			const objects = {
				name : data.name,
				email: data.email,
				id : data._id
			}

			console.log(objects);
						
			res.render("update", { students : objects})
		
		}      

	})

})



app.post("/update_data/:id", (req, res, next)=> {
	userModel.findOneAndUpdate({_id: req.params.id},{name : req.body.name, email : req.body.email}, (err)=> {
		if(!err)
			res.render("list", {})

	})

	next();
})






app.listen(3000, ()=> {
	console.log("server is running...");
})
