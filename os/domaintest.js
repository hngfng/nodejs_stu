
// Node.js Domain(域) 简化异步代码的异常处理，
// 可以捕捉处理try catch无法捕捉的异常
// domain模块，把处理多个不同的IO的操作作为一个组。注册事件和回调到domain，
// 当发生一个错误事件或抛出一个错误时，
// domain对象会被通知，不会丢失上下文环境，
// 也不导致程序错误立即退出，与process.on('uncaughtException')不同。
var domain = require("domain");
var event = require("events");
var emitter = new event.EventEmitter();
//创建域
var dm1 = domain.create();

dm1.on("error",function(erro){
    console.log("处理这个错误"+erro);
});
//显示绑定
dm1.add(emitter);
emitter.on("error",function(err){
    console.log("监听器处理此错误")
});
emitter.emit("error",new Error("监听器来处理"));
emitter.removeAllListeners("error");
emitter.emit("error",new Error("通过dm1来处理"));

var domain2 = domain.create();
domain2.on('error', function(err){
   console.log("domain2 处理这个错误 ("+err.message+")");
});
// 隐式绑定
domain2.run(function(){
    var emitter2 = new EventEmitter();
    emitter2.emit('error',new Error('通过 domain2 处理'));   
 });
 dm1.remove(emitter);
 emitter.emit('error', new Error('转换为异常，系统将崩溃!'));