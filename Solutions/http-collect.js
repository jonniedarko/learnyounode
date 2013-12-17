(function (url) {
	var http = require("http");
	var bl = require("bl");

	http.get(url, function (response){
		response.pipe(bl(function (err, data){
			if(err){ 
				console.error(err) ;
				throw err;
			}
			console.log(data.toString().length);
			console.log(data.toString());
		}));
	});
})(process.argv[2]);
