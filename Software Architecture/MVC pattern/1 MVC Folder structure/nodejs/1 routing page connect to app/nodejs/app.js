const express = require('express');
const app = express();

const router = require('./route/blogRoute');

app.use(router);






app.get('/',(req, res)=> {
  res.send("dddd")
})


app.listen(3000, ()=> {
  console.log("server is running...")
})




