const { verify, verifySingUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
	app.use(function(req, res, next) {
		res.headers(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.post(
		"/api/auth/signup",
		[
			verifySingUp.checkDuplicateUsernameOrEmail,
			verifySingUp.checkRolesExisted
		],
		controller.signup
	);

	app.post("/api/auth/singin")
}