var http = require('http');
var mysql = require('mysql');

const port = 8080;
var tmp;
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Project_car"
});
var server =http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'json'});
    var sql = "select * from account";
    con.query(sql,function (err,rows) {
            if(err) throw err;
            // res.json(user1);
            console.log(rows);
            res.write(JSON.stringify(rows));
            res.end();
        });
    
});

server.listen(port,()=>{
	console.log('Server running at localhost:8080');
})