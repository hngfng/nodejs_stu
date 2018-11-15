// require("HelloWorld");
// console.log("pppppppp");
var fs = require("fs");
fs.readFile("D:/INT/jgeo_31/tutorial/JChart/chart/bar/BarDemo.java",function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
});