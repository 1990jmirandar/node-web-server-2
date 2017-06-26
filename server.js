const express = require ('express');
const hbs = require('hbs');
var app=express();
const port = process.env.PORT || 3000;

//app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
  res.send('hello Express');
});

app.get('/help',(req,res)=>{
  res.send('<h1>Todo Bien</h1>')
});
app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.listen(port,() =>{
  console.log('puerto',port);
});

//Esto sera un ejemplo de prueba para craken
