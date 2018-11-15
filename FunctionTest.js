function say(sameworld)
{
    console.log(sameworld);
}
function excute(ff,value){
    ff("Hello");
}
excute(say,"hello");
var http = require("http");
http.createServer(function(reuqest,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);
