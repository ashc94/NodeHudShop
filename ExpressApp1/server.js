var express = require("express");
var mongoose = require("mongoose");

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));





mongoose.connect('mongodb://localhost/HudShop');
var db = mongoose.connection;
db.on("error",
    function() {
        console.log("Connection error");
    });
db.once("open",
    function() {
        console.log("Connected");
    });

var Result;
db.collection('foo',
    function(err, collection) {
        collection.find({ '_id': 1 },
            function(error, result) {
                Result = result;
            });
    });

app.get('/',
    function (req, res) {
        
        res.sendfile("views/shared/index.html");
    });

app.get('/api',
    function (req, res) {
        res.type('text/plain');
        res.send(Result);
    });

var port = 1234;
app.listen(port);

console.log("Node is running brah");