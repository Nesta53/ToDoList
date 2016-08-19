var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('routeeee');
		next();
	},
	logger: function (req, res, next) {
		console.log(req.method);
		next();
	}
};

//app.use(middleware.requireAuthentication);
app.use(middleware.logger);
app.use(express.static(__dirname + '/public'));
app.listen(PORT, function () {
	console.log('server started');
});
