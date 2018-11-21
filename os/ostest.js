// Node.js os 模块提供了一些基本的系统操作函数
var os = require("os")
// 操作系统的默认临时文件夹。
console.log(os.tmpdir());
// CPU 的字节序，可能的是 "BE" 或 "LE"。
console.log(os.endianness());

