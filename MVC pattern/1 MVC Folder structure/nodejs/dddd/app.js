const express = require('express');
const app = express();


const Blog = require('./routes/blogRoutes');


app.use('/blog',Blog)





app.listen(3000, ()=> {
  console.log("server is running...")
})