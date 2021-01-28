const express = require('express');
const app = express();

const router = require('./routes/blogRoute');


//blog route 

app.use(router);
// app.use("/blog", router);






app.get('/',(req, res)=> {
  res.send("dddd")
})


app.listen(3000, ()=> {
  console.log("server is running...")
})




