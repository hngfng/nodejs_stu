var http = require("http");
http.createServer(function(requset,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello world!!');
}).listen(9090);
