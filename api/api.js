var express = require('express');

var app = express();

app.post('/register', function(req, res){
    res.send("hi");
})

var server = app.listen(8080, function(){
    console.log('api listening on ', server.address().port);
})
