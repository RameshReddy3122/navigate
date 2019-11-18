const express = require('express');
const app = express();


app.set('view engine', 'pug');


app.get('/', function(req,res){
    res.render('index3');
});

app.get('/index2',function(req,res){
     res.redirect('index2');
});



app.listen(9999,function(){
    console.log('My server is running on port no.9999');
});