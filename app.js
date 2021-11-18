const express = require('express');
const app = express();
const port = process.env.PORT || 1000;

app.use(express.static(__dirname + '/public'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/trivia.html');
})

app.listen(port,(req,res)=>{
    console.log(port); 
})




