var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var passport = require('passport');
var googleAuth = require('./services/googleAuth.js');
var facebookAuth = require('./services/facebookAuth.js');
var LocalStrategy = require('./services/localStrategy.js');
var jobs = require('./services/jobs.js');
var emailVerification = require('./services/emailVerification.js');

var app = express();

emailVerification.send('fake@fake.com');

app.use(bodyParser.json());
app.use(passport.initialize());

passport.serializeUser(function(user, done){
    done(null, user.id);
})

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', 'http://localhost');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
})


passport.use('local-register', LocalStrategy.register);
passport.use('local-login', LocalStrategy.login);

app.post('/register', passport.authenticate('local-register'), function(req, res){
    createSendToken(req.user, res);
})

app.post('/login', passport.authenticate('local-login'), function(req, res){
    createSendToken(req.user, res);
});


app.get('/jobs', jobs);
app.post('/auth/google', googleAuth);
app.post('/auth/facebook', facebookAuth);

mongoose.connect('mongodb://marley:marley@ds053678.mongolab.com:53678/psjwt')

var server = app.listen(3000, function(){
    console.log('api listening on ', server.address().port);
})
