// 클래스가 구체적인 데이터를 지니지 않게 하는 방법
// delete Square.prototype.width;
// delete Square.prototype.height;
// Object.freeze(Square.prototype);
// 프로퍼티가 많을 경우 반복 작업이 될테니 반복을 없애면 좋을 것 같다.

// 인스턴스 생성 후 프로퍼티 제거
var extendClass1 = function (SuperClass, subClass, subMethods) {
    subClass.prototype = new SuperClass();
    for (var prop in subClass.prototype) {
        if (subClass.prototype.hasOwnProperty(prop)) {
            delete subClass.prototype[prop];
        }
    }
    if (subMethods) {
        for (var method in subMethods) {
            subClass.prototype[method] = subMethods[method];
        }
    }
    Object.freeze(subClass.prototpye);
    return subClass;
};

var Square = extendClass1(Rectangle, function (width) {
    Rectangle.call(this, width, width);
});