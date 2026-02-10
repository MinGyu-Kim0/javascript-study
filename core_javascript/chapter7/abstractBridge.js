// 빈 생성자 함수(Bridge)를 하나 더 만들어서 그 prototype이 SuperClass의 prototype을 바라보게 함.
// SubClass의 prototype에는 bridge의 인스턴스를 할당하게 함.

var Rectangle = function (width, height) {
    this.width = width; 
    this.height = height;
};
Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};
var Square = function (width) {
    Rectangle.call(this, width, width);
};
var Bridge = function () {};

Bridge.prototype = Rectangle.prototype;

Square.prototype = new Bridge();

Object.freeze(Square.prototype);