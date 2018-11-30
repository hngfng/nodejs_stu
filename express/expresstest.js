var exp = require("express");
var app = exp();
app.get("/",function(req,res){
    res.send("Hello World");
});
app.get("/",function(req,res){
    res.send("get request to the homepage");
});
app.post("/",function(req,res){
    res.send("post request to the homepage");
});
//它并非派生自 HTTP 方法。该方法用于在所有请求方法的路径中装入中间件函数。
app.all("/secret",function(req,res,next){
    console.log("Accessing the secret section.....");
    next();
});
app.get("/",function(req,res){
    res.send("root");
});
app.get("/about",function(req,res){
    res.send("about");
});
//多个回调函数
app.get("",function(req,res,next){
    console.log("the response will be sent by the next funcion....");
    next();
},function(req,res){
    res.send("Hell from b");
});