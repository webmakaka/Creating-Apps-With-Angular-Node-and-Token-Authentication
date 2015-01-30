var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/User.js')
var jwt = require('./services/jwt.js');

var app = express();

app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
})

app.post('/register', function(req, res){
    var user = req.body;

    var newUser = new User.model({
        email: user.email,
        password: user.password
    });

    var payload = {
        iss: req.hostname,
        sub: user._id
    }

    var token = jwt.encode(payload, "shhh..");

    newUser.save(function(err){
        res.status(200).send({
            user: newUser.toJSON(),
            token: token
        });
    })
})

var jobs = [
    'Cook',
    'SuperHero',
    'Unicorn Wisperer',
    'Toast Inspector'
];

app.get('/jobs', function(req,res){

    if(!req.headers.authorization){
        return res.status(401).send({message: 'You are not authorized'});
    }

    var token = req.headers.authorization.split(' ')[1];

    // var token = req.headers.authorization;

    console.log("-----------api.js --------------");
    console.log("token: " + token);
    console.log("---------------------------");

    var payload = jwt.decode(token, "shhh..");

    console.log("-----------api.js --------------");
    console.log("payload.sub: " + payload.sub);
    console.log("---------------------------");


    if(payload.sub){
        res.status(401).send({message: 'Authentication failed'});
    }


    console.log("-----------api.js --------------");
    console.log("jobs: " + jobs);
    console.log("---------------------------");


    res.json(jobs);
})

mongoose.connect('mongodb://marley:marley@ds053678.mongolab.com:53678/psjwt')

var server = app.listen(3000, function(){
    console.log('api listening on ', server.address().port);
})
