const express = require('express');

var app = express();

const port = 3000;
const server = app.listen(port);
app.get('/home', function(req, res){
    res.send('hello world');
})