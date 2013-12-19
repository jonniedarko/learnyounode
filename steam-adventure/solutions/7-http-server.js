(function (port){
	var http = require("http");
	var through = require("through");

	var server = http.createServer(function (request, response){
		if(request.method ==="POST"){
			request.pipe(through(function (data){
				return data.toString().toUpperCase();
			})).pipe(response);

		}
		else
			response.writeHead(404);
	});
	server.listen(port);
})(Number(process.argv[2]));
