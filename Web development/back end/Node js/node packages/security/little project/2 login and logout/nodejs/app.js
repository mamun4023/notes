const express = require('express');
const app = express();
const session = require("express-session");
const expressHandlebars = require('express-handlebars');
const path = require('path')
const bodyParser = require('body-parser');



const TWO_HOURS = 1000 * 60 * 60 * 2;

// setting session middleware 
const {
  PORT = 3000,
  NODE_ENV = "development",
  SESS_NAME = "sid",
  SESS_SECRET = "secret key",
  SESS_LIFETIME = TWO_HOURS
} = process.env;



const IN_PROD = NODE_ENV === "production";




const users = [
  {id : 1, name : 'Alex', email: "alex@gmail.com", password :  "secret"},
  {id : 2, name : 'Max', email: "Max@gmail.com", password :  "secret"},
  {id : 3, name : 'Hagard', email: "Hagard@gmail.com", password :  "secret"}

]



//session setting
app.use(session({
  name : SESS_NAME,
  resave : false,
  saveUninitialized : false,
  secret : SESS_SECRET,
  cookie : {
    maxAge : SESS_LIFETIME,
    sameSite : true,
    secure : IN_PROD,


  }
}))





app.engine('hbs', expressHandlebars({
  extname : 'hbs',
  defaultLayout : "mainLayout",
  layoutsDir : __dirname + "/views"
}));


app.set('view engine', 'hbs')


app.get('/', (req, res)=> {

    const userId = 0;

    // (userId)?res.render("logout", {}) : res.render("home", {})
   if(userId === undefined  || userId === 0)
      res.render("home", {})
   else
      res.render('logout', {})

})



app.get("/register", (req, res)=> {
  res.render("register", {})
})




app.get('/login',(req, res)=> {
  res.render('login', {})
})



app.post("/register", (req, res)=> {
  res.render("register", {})
})




app.post('/login',(req, res)=> {


})




app.listen(PORT, ()=> {
  console.log("server is running...");
})




