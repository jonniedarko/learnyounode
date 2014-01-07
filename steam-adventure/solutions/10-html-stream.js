(function(){
	var through = require("through");
	var trumpet = require("trumpet");
	var tr = trumpet();

	//create Stream
	var stream = tr.select('.loud').createStream();
	//pipe stream "through" to to manipulate then pipe backe to stream
	stream.pipe(through(function (element){
		this.queue(element.toString().toUpperCase());
	})).pipe(stream);

	process.stdin.pipe(tr).pipe(process.stdout);

})();
