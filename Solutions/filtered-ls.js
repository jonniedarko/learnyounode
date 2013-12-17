module.exports = function(directory, fileType, callback) {
	var fs = require("fs");

	fs.readdir(directory, function (err, data) {
		if (err) return callback(err);
		var regex = new RegExp('\\.' + fileType + '$')

		var filteredList = [];
		data.forEach(function(file) {
			if (regex.test(file)) {
				filteredList.push(file);
			}
		});
		callback(null, filteredList);

	});

}
