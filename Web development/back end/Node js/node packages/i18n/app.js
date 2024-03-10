const express = require('express');
const app = express();
const {I18n} = require('i18n')
const path = require('path')

const i18n = new I18n({
  locales : ['en', 'ben'],
  directory : path.join(__dirname, "translation"),
  defaultLocale : "en"
})


app.use(i18n.init);

app.get('/test', (req, res)=>{
  res.send({id : 1, name : res.__('Welcome')})
})


app.listen(3000, ()=>{
    console.log("server running at : 3000")
})
