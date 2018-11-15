var ss = require("fs");
var data="";
//创建可读流
var reader = ss.createReadStream("");
reader.setEncoding("utf-8");
//处理事件流 data end error finish
reader.on("data",function(chunk){
    data+=chunk;
});
reader.on("end",function(){
    console.log("end .......");
});
reader.on("error",function(){
    console.log("error ...........");
})
reader.on("finish",function(){
    console.log("finish............");
});
//创建写入流
var write = ss.createWriteStream("");
write.write(data,"utf-8");
write.end();
write.on("finish",function(){
    console.log("write finish ................");
});
write.on("error",function(){
    console.log("write error.........");
});
//管道流
reader.pipe(write);