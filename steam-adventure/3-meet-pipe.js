(function (file){

	var fs = require("fs");
	fs.createReadStream(file).pipe(process.stdout);

})(process.argv[2]);
