var jwt = require('jwt-simple');

module.exports =  function(req, res, next){

    if(!req.headers || !req.headers.authorization){
        return res.status(401).send({
            message: 'Authentication failed'
        });
    }

    var token = req.headers.authorization.split(' ')[1];
    var payload = jwt.decode(token, "shhh..");

    if(!payload.sub){
        return res.status(401).send({
            message: 'Authentication failed'
        });
    }

    if(!req.headers.authorization){
        return res.status(401).send({
            message: 'You are not authorized'
        });
    }

    next();
}
