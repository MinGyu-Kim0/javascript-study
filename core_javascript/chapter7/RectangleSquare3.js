var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
};

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

var rect = new Rectangle(3, 4);
console.log(rect.getArea());            // 12


// Rectangle을 상속하는 Square 클래스
var Square = function (width) {
    Rectangle.call(this, width, width);
};
Square.prototype = new Rectangle();

var sq = new Square(5);
console.log(sq.getArea());              // 25

var rect2 = new sq.constructor(2, 3);
console.log(rect2);                     // Rectangle { width: 2, height: 3 }