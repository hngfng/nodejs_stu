// Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，
// 例如读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。
// 异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。
// 建议大家使用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。
var fs = require("fs");
//异步读取
fs.readFile("input.txt",function(error,data){
    if(error){
        return console.log("read failed" + error);
    }
    console.log(data.toString());
});
//同步读取
var data = fs.readFileSync("input.txt");
console.log(data.toString());
fs.open("input.txt",r,function(err, fd){
    
});