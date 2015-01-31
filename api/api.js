var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/User.js')
var jwt = require('./services/jwt.js');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

passport.serializeUser(function(user, done){
    done(null, user.id);
})

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    next();
})

var strategyOptions = {
        usernameField: 'email'
};

var loginStrategy = new LocalStrategy(strategyOptions, function(email, password, done){

    var searchUser = {
        email: email
    };

    User.findOne(searchUser, function(err, user){
        if(err) return done(err);

        if(!user) return done(null, false, {message: 'Wrong email/password'});

        user.comparePasswords(password, function(err, isMatch){
            if(err) return done(err);

            if(!isMatch){
                return done(null, false, {message: 'Wrong email/password'});
            }

            return done(null, user);
        });

    })
});

var registerStrategy = new LocalStrategy(strategyOptions, function(email, password, done){

    var searchUser = {
        email: email
    };

    User.findOne(searchUser, function(err, user){
        if(err) return done(err);

        if(user) return done(null, false, {message: 'email already exists'});

        var newUser = new User({
            email: email,
            password: password
        });

        newUser.save(function(err){
            done(null, newUser);
        })

    });
});

passport.use('local-register', registerStrategy);

passport.use('local-login', loginStrategy);

app.post('/register', passport.authenticate('local-register'), function(req, res){
    createSendToken(req.user, res);
})

app.post('/login', passport.authenticate('local-login'), function(req, res){
    createSendToken(req.user, res);
});

function createSendToken(user, res){

    var payload = {
        sub: user.id
    }

    var token = jwt.encode(payload, "shhh..");

    res.status(200).send({
        user: user.toJSON(),
        token: token
    });
}

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

    var payload = jwt.decode(token, "shhh..");

    if(!payload.sub){
        res.status(401).send({message: 'Authentication failed'});
    }
    res.json(jobs);
})

mongoose.connect('mongodb://marley:marley@ds053678.mongolab.com:53678/psjwt')

var server = app.listen(3000, function(){
    console.log('api listening on ', server.address().port);
})
