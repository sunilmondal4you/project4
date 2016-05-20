/**
 * Created by abc on 20/05/2016.
 */
var express= require("express");
var bodyParser = require('body-parser');

var app= express();

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/a/b',function(req,res) {
    res.send(req.body);
});

app.get('/a/b',function(req,res) {
    var name=req.query.name;
    res.send("Your name is "+name);
});

app.listen(3000, function () {
    console.log("Server 3000 start");
});