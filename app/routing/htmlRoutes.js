var path = require('path');

module.exports = function(result) {
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/survey.html'));
	});

	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/home.html'));
	});

	app.use('/home', function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/home.html'));

	});
};