// Node.js 提供了 htt
// http 模块主要用于搭建 HTTP 服务端和客户端，
// 使用 HTTP 服务器或客户端功能必须调用 http 模块
var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(req,res){
    var pthNm = url.parse(req.url).pathname;
    console.log(pthNm);
    fs.read(pthNm.substr(1),function(err,data){
        if(err){
            console.log("some error");
            res.writeHead(404,{"Content-Type":"text/html"});
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(data);
        }
    });
}).listen(8080);
