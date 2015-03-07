/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt-nodejs');

module.exports = {

  attributes: {
      email: {
          type: 'string',
          required: true,
          unique: true
      },
      password: 'string'

  },
      beforeCreate: function(attributes, next){
          bcrypt.genSalt(10, function(err, salt){
              if(err) return next(err);

              bcrypt.hash(attributes.password, salt, null, function(err, hash){
                  if(err) return next(err);

                  attributes.password = hash;
                  next();
              });
          });
  }
};
