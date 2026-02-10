// ES5에서 도입된 Object.create를 이용한 방법.
// SubClass의 prototype의 __proto__가 SuperClass의 prototype을 바라보되,
// SuperClass의 인스턴스가 되지는 않으므로 다른 두 방법보다 간단하면서 안전하다.

// ...
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

Square.prototype = Object.create(Rectangle.prototype);
Object.freeze(Square.prototype);
// ... 
