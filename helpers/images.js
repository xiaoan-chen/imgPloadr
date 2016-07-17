var modules = require('../models');

module.exports = {
	popular: function(callback) {
		modules.Image.find({}, {}, {limit: 9, sort: { likes: -1}}, function(err, images) {
			if (err) throw err;
			callback(null, images);
		});
	}
};
