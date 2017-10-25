var http = require('http');
const port = 8080;
var fs = require('fs');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'json'});
    console.log('เชื่อแล้ว')


    res.writeHead(200,'Hello World!');

	fs.readFile('./ez1.json', function(err, data)
	{
		var tm = data.toString();
		console.log(tm);

		 res.write(tm);
		 res.end();
	});
      


}).listen(port);

console.log('localhost:'+port);
