(function (file){
	var through = require("through");
	var split = require("split");
	var count = 1;
	var tr = through(function write (data){
		if(count%2 ===0)
			this.queue(data.toString().toUpperCase()+"\n");
		else
			this.queue(data.toString().toLowerCase()+"\n");

		count++;
	});
	process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
})(process.argv[2]);
