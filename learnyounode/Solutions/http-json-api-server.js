(function (port) {
	console.log('a1');
	var http = require("http");
	var map = require("through2-map");
	var _url = require("url");

	function parseTime (isoString) {
		var iso_Date = new Date(isoString);
		var iso_JSON = {};
		iso_JSON.hour = iso_Date.getHours();
		iso_JSON.minute = iso_Date.getMinutes();
		iso_JSON.second = iso_Date.getSeconds();
		return iso_JSON;
	}

	var server = http.createServer(function (request, response) {
		var result;
		var parsedUrl = _url.parse(request.url, true);
		var iso_String = parsedUrl.query.iso.toString();
		if (parsedUrl.pathname == '/api/parsetime') {
			result = parseTime(iso_String);
		} else if (parsedUrl.pathname == '/api/unixtime') {
			var unixtimeJson = {};
			unixtimeJson.unixtime = (new Date(iso_String) ).getTime();
			result = unixtimeJson;
		}
		if (result) {
			response.writeHead(200, {
				'Content-Type': 'application/json'
			})
			response.end(JSON.stringify(result));
		} else {
			response.writeHead(404)
		}
	});
	server.listen(Number(port));

})(process.argv[2]);
