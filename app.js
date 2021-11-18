const express = require('express');
const app = express();
const port = process.env.PORT || 1000;

app.use(express.static(__dirname + '/docs'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/docs/trivia.html');
})

app.listen(port,(req,res)=>{
    console.log(port); 
})




