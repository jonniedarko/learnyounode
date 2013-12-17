(function (port){
	var net = require("net");
	var moment = require("moment");


	var socketServer = net.createServer(function (socket){
		var date = moment().format("YYYY-MM-DD HH:mm");
		console.log(date);
		socket.write(date);
		socket.end("\n");
	});
 	socketServer.listen(Number(port));
})(process.argv[2]);
