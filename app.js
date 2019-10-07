const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const landing = require('./Routes/landing');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/Static"));

app.use('/',landing);

app.listen('8080', ()=>{
    console.log("server is started");
})