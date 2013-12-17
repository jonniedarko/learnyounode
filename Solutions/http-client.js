(function (url) {
  var http = require ("http");

  http.get(url, function (response){
  	response.setEncoding("utf8");
  	response.on("err", console.error);
  	response.on("data", console.log);
  
  });
})(process.argv[2]);
