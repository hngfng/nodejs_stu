//加载事件模块
var events = require("events");
//创建事件分发器 emitter(发射器)
var eventEmitter = new events.EventEmitter();
// eventEmitter.emit("error");
//事件处理
var handler1 = function connected() {
    console.log("链接成功！！");
    //提交（触发）事件
    eventEmitter.emit("data_received");
}
//链接（绑定）事件
eventEmitter.on("connection", handler1);
eventEmitter.on("data_received", function () {
    console.log("数据接收成功");
})
//事件延迟
setTimeout(function () {
    eventEmitter.emit("connection");
}, 1000);
console.log("程序执行完毕！");
//回调函数
eventEmitter.on("connection",function(arg1,arg2){
    console.log("listener1",arg1,arg2);
});
eventEmitter.emit("connection","参数1","参数2");
var event2 = require("events");
var emitter = new event2.EventEmitter();
// emitter.emit("error");
emitter.addListener("test",function(){
    console.log("listener");
});
emitter.emit("test");