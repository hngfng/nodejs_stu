var path = require("path");
// 规范化路径，注意'..' 和 '.'。
path.normalize("");
// 将 to 参数解析为绝对路径，给定的路径的序列是从右往左被处理的，
// 后面每个 path 被依次解析，直到构造完成一个绝对路径。
path.resolve("/foo/bar","./baz");
//返回：/foo/bar/baz
path.resolve('/foo/bar', '/tmp/file/');
// 返回: '/tmp/file'

path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// 如果当前工作目录为 /home/myself/node，
// 则返回 '/home/myself/node/wwwroot/static_files/gif/image.gif'

path.isAbsolute("ss");

path.relative("/data/orandea/aa","/data/orandea/bb");
//../../impl/bbb
