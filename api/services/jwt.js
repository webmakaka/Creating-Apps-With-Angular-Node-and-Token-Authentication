var jwt = require('jwt-simple');
var moment = require('moment');

module.exports = function(user, res){
        var payload = {
            sub: user.id,
            exp: moment().add(10, 'days').unix()
        };

        var token = jwt.encode(payload, "shhh..");

        res.status(200).send({
            user: user.toJSON(),
            token: token
        });
};
