var util = require("util");
// 如果给定的参数 "object" 是一个数组返回true，否则返回false。
util.isArray([1,4]);//true
util.isArray([]); //true
util.isArray({});//false
// 如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。
util.isRegExp("some regexp");
// 如果给定的参数 "object" 是一个日期返回true，否则返回false。
util.isDate(new Date());
util.isDate(Date());
// false (without 'new' return a string)
// 如果给定的参数 "object" 是一个错误对象返回true，否则返回false。
util.isError(new Error());