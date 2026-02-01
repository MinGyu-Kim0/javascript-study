class Bar {
  x = 2;
  static y = 1; // Bar.y -> class member variable

  static prtY() {
    console.log(Bar.y);
  }
}

obj1 = new Bar();
obj2 = new Bar();

Bar.y = 20; // static은 생성자 함수 객체에 붙으므로 클래스 이름으로 접근.
// 각 객체들마다 공유 가능.

console.log(Bar.y); // 20
console.log(obj1.y); // undefined -> prototype에 y가 없음!
console.log(obj2.y); // undefined

class Bar2 {
  x = 2;
  static y = 1; // Bar.y -> class member variable

  static prtY() {
    console.log(this.x);
  }
}
Bar2.prtY();

console.log(obj1.y);
