(function (filename){
	var fs = require("fs");

  fs.readFile(filename, function (err, data){
  	if (err) throw err;
  
  	newLineCount = data.toString().split("\n").length -1;
  	console.log(newLineCount);
  });

})(process.argv[2]);
