// 由于GET请求直接被嵌入在路径中，URL是完整的请求路径，
// 包括了?后面的部分，因此你可以手动解析后面的内容作为GET请求的参数。
// node.js 中 url 模块中的 parse 函数提供了这个功能。
var http = require("http");
var url = require("url");
var util = require("util");
// 由于GET请求直接被嵌入在路径中，URL是完整的请求路径，
// 包括了?后面的部分，因此你可以手动解析后面的内容作为GET请求的参数。
// node.js 中 url 模块中的 parse 函数提供了这个功能。
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
    res.end(util.inspect(url.parse(req.url,true)));
}).listen(300);
// 我们可以使用 url.parse 方法来解析 URL 中的参数
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});
    var params = url.parse(req,url,true).query;
    res.write("网站名："+params.name);
    res.write("\n");
    res.write(params.url);
    res.end();
}).listen(3000);


var queryStr = require("querystring");
http.createServer(function(req,res){
    var post = "";
    //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
    req.on("data",function(chunk){
        post += chunk;
    });
    // 在end事件触发后，
    // 通过querystring.parse将post解析为真正的POST请求格式，
    // 然后向客户端返回。
    req.on("end",function(){
        post = queryStr.parse(post);
        res.end(util.inspect(post));
    });
}).listen(3000);
