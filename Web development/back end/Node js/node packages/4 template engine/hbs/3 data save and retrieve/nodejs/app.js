const express = require('express');
const app = express();
const expressHandlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//data base connection

mongoose.connect("mongodb://127.0.0.1:27017/db",{useNewUrlParser: true}, { useUnifiedTopology: true }, (err)=> {
  if(!err)
    console.log("DB connected")
})




app.use(bodyParser.urlencoded({extended : true}))
// setting hbs engine

app.engine("hbs", expressHandlebars({

  extname : 'hbs',
  defaultLayout : "mainLayout",
  layoutsDir : __dirname + "/views/layout"
}))   
   



app.set('view engine', 'hbs');



// data save in database

const userSchema =  new mongoose.Schema({
  name : String,
  email : String
})



const userModel = new mongoose.model('userModel', userSchema);






app.get('/', (req, res)=> {
  res.render('index', { 
  })
})




// post data into database
app.post('/post', (req, res)=> {
  var data = new userModel(req.body)

  data.save().then(()=> {
    res.send("data is saved")
  })

  .catch((err)=> {
    res.send("data not saved ")
  })
})




// retrieve data from database


app.get('/fetch', (req, res)=> {
  userModel.find((err, data)=> {
    if(err)
      res.send("data not found")
    else{
        const newObject = {
        article : data.map(d=> {
          return{
            name : d.name,
            email: d.email,
            id : d._id
          }
        })
      }

      res.render("list", {


        article : newObject.article
      })
    }
  })

})










app.listen(3000,()=> {
  console.log("server is running...")
})