var Rectangle = function (width, height) { // 생성자
    this.width = width;
    this.height = height;
};
Rectangle.prototype.getArea = function () { // (프로토타입) 메서드
    return this.width * this.height;
};
Rectangle.isRectangle = function (instance) { // 스태틱 메서드
    return instance instanceof Rectangle &&
        instance.width > 0 && instance.height > 0;
};

var rect1 = new Rectangle(3, 4)
console.log(rect1.getArea());               // 12 (0)
console.log(rect1.isRectangle(rect1));      // Error (X)
console.log(Rectangle.isRectangle(rect1));  // true