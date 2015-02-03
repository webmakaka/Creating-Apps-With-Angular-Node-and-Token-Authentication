var _ = require('underscore');
var fs = require('fs');
var jwt = require('jwt-simple');
var config = require('./config.js');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


var model = {
    verifyUrl: 'http://loclhost:3000/auth/verifyEmail?token=',
    title: 'psJwt',
    subTitle: 'Thanks for signing up!',
    body: 'Please verify your email address by clicking the button below'
}


exports.send =  function(email){
    var payload = {
        sub: email
    }

    var token = jwt.encode(payload, config.EMAIL_SECRET);

    var transporter = nodemailer.createTransport(smtpTransport({
        host: config.SMTP_SERVER,
        secure: true,
        auth: {
            user: config.SMTP_USERNAME,
            pass: config.SMTP_PASSWORD
        }
    }));

    var mailOptions = {
        from: 'Accounts <accounts@socialplay.com>',
        to: email,
        subject: 'psJwt Account Verification',
        html: getHtml(token)
    };

    transporter.sendMail(mailOptions, function(err, info){
        if(err){
            console.log("ERROR");
            console.log(err);
            //return res.status(500, err);
        }

        console.log("OK");
        console.log('email sent ', info.response);
    })
}

function getHtml(token){
    var path = './views/emailVerification.html';
    var html = fs.readFileSync(path, encoding = 'utf8');

    var template = _.template(html);

    model.verifyUrl += token;

    return template(model);
}

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};
