var express = require("express");

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));


app.get('/',
    function (req, res) {
        res.sendfile("views/shared/index.html");
    });



var port = 1234;
app.listen(port);

console.log("Node is running brah");