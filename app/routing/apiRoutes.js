var friendsList = require('../data/friends.js');

module.exports = function(result) {
	app.post('/api/friends', function(req, res) {
		var user = req.body;

		var matches = {};

		for(var i = 0; i < user.scores.length; i++) {
			user.scores[i] = parseInt(user.scores[i]);
		}

		for(var i = 0; I < friendsList.length; i++) {
			var total = 0;

			for(var j = 0; j < friendsList[i].scores.length; j++) {
				var diff = Math.abs(friendsList[i].scores[j] - user.scores[j]);
				total = total + diff;
				//add up the total differences

			}

			matches.push(total);

		}

		var bestMatch = 0;

		for(var k = 0; k < matches.length; k++) {
			var biggestDiff = 40;

			if (matches[i] < biggestDiff) {
				bestMatch = matches[i];
			}

		}

		friendsList.push(user);

		res.json(bestMatch);
	});



};