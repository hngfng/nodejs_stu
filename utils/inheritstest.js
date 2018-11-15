// util.inherits(constructor, superConstructor)是一个实现对象间原型继承的函数。
// JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。
// JavaScript 没有提供对象继承的语言级别特性，而是通过原型复制来实现的。
var util = require("util");
function Base()
{
    this.name = "base";
    this.base = 1991;
    this.sayHello = function(){
        console.log(this.name + "  Hello");
    }

}
// prototype 原型
Base.prototype.showName = function(){
    console.log(this.name);
}
function Sub(){
    this.name = "sub";
}
// inherits 继承
util.inherits(Sub,Base);
// 定义了一个基础对象Base 和一个继承自Base 的Sub，
// Base 有三个在构造函数 内定义的属性和一个原型中定义的函数，通过util.inherits 实现继承
// Sub 仅仅继承了Base 在原型中定义的函数，
// 而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objsub = new Sub();
objsub.showName();
// objsub.sayHello();
console.log(objsub);