const express = require('express');
const path = require('path');
const app = express();
// import express from 'express'

app.use(express.static('dist'));

app.get('/', function(res, res){
    res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

