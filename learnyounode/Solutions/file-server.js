(function (port, path){
	var http = require("http");
	var fs = require("fs");

	var file_server = http.createServer(function (request, response){
		response.on('err', console.error);
		var file_stream = fs.createReadStream(path, "utf8");

		file_stream.pipe(response);

	});
	file_server.listen(port);

})(process.argv[2], process.argv[3]);
