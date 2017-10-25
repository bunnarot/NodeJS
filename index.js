var http = require('http');
const port = 8080;
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log('เชื่อแล้ว')

    res.writeHead('Hello World!');

    switch(req.url){
    	case "/id" : console.log('Url path is /id');break;
    	case "/user" : console.log('Url path is /user');break;
    	default: 
       			 text = "Looking forward to the Undifine";
}
      res.end('Hello World!');


}).listen(port);

console.log('localhost:'+port);
