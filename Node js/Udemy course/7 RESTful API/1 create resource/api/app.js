
const express = require('express');
const app = express();
require('./mongoose');
const User = require('./users');

// parse data to json expression
app.use(express.json());


app.post("/user", (req, res)=> {
  
   // creating instance of model 
   const user = new User(req.body)	

   user.save().then(() => {
   	res.send(user)
   }).catch((err)=> {
   	res.status(400).send(err)
   })

})



app.listen(3000, ()=> {
	console.log("server is running...");
})