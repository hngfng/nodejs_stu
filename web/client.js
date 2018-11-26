var http = require("http");
var options = {
    host:"localhost",
    port:"8080",
    path:"/index.html"
};
var req = http.request(options,function(res){
    var body = "";
    res.on("data",function(data){
        body +=data;
    });
    res.on("end",function(data)
    {
        console.log("end .......");
    });
});
req.end();