class Car {
    x = 10;
    y = 20;

    prtX() {}
}

class Suv extends Car {
    x = 200;
    z = 30;
    prtY() {}
    prtZ = function() {};
    constructor() {
        super();
        Suv.prototype.prtK = function() {};
        // this.x = 200; car에 x가 존재. 값을 덮어씌움
        // this.z = 30;
        // this.prtZ = function () {}
    }
}

obj1 = new Suv();
console.log(`x: ${obj1.x}, y: ${obj1.y}, z: ${obj1.z}`)