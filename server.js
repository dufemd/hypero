const express = require('express');
const app = express();
const uuid = require('uuid');
const id = uuid.v4();

app.set('view engine','ejs');
app.set('views','./');
app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
  res.render('view',{data:id});
});

app.listen(3000,function(){
  console.log('hello ejs');
});