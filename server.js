ar express = require('express');

var app = express();
const PORT = 3000;

p.listen(PORT,()=>{
  console.log(`App is running on port ${PORT}`);
});app.set('view engine','ejs');//sent views to EJS

//this is how a route is built in Express
app.get('/', (req,res)=>{
  var title = "Our Home Page";
  res.render('index',{title:title});
});
