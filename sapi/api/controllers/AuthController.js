/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	login: function(req, res){
		var email = req.body.email;
		var password = req.body.password;

		if(!email || !password){
			return res.status(401).send({
				message: "username and password required"
			});
		}

		User.findOneByEmail(email, function(err, foundUser){
			if(!foundUser){
				return res.status(401).send({
					message: "username or password invalid"
				});
			}
		})
	}
};
