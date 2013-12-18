(function (file){
	var through = require("through");

	var tr = through(function write (data){
		console.log(data.toString().toUpperCase());
	}, function end (){
		this.queue(null);
	});

	process.stdin.pipe(tr).pipe(process.stdout);

})(process.argv[2]);
