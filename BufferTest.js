// Buffer 类用来创建一个专门存放二进制数据的缓存区。
const buf = Buffer.from("fff","ascii");
console.log(buf.toString("hex"));
console.log(buf.toString("base64"));
//创建指定大小的buff
const buf1 = Buffer.alloc(10);
//长度为10，且未初始化
//比alloc要快
//需要使用fill或write重写
var buf2 = Buffer.allocUnsafe(10);
// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer
var buf3 = Buffer.from([1,2,3]);
// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
var buf4 = Buffer.from("test");
//写
var len = buf1.write("HelloWorld,haha");
console.log(len);
//读
console.log(buf1.toString('utf-8'));
//json
console.log(buf1.toJSON().toString());
//缓冲区合并
var bufTotal = Buffer.concat([buf1,buf2,buf3]);
console.log(bufTotal.toString('utf-8'));

