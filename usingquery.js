var http = require('http');
var url = require('url');


var server = http.createServer(function(req,res){
      var url_parts = url.parse(req.url,true); 
      var color = url_parts.query.color;
      var msg = url_parts.query.msg;
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write("<h1 style='color:"+color+"'> "+msg+"</h1>");
      res.end();
      	
});

server.listen(8100);

console.log("server started on port 8100");

