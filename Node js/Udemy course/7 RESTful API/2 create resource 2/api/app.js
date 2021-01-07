
const express = require('express');
const app = express();
require('./mongoose');
const Task = require('./users');

// parse data to json expression
app.use(express.json());


app.post("/user", (req, res)=> {
  
   // creating instance of model 
   const task = new Task(req.body)	

   task.save().then(() => {
   	res.send(task)
   }).catch((err)=> {
   	res.status(400).send(err)
   })

})



app.listen(3000, ()=> {
	console.log("server is running...");
})