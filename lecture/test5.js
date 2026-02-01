class Student {
  constructor() {
    // constructor function
    this.x = 2;
  }
}
// -> student(생성자 함수)객체가 생성
// 해당 함수는 prototype 속성을 가지고 prototype은 빈 객체를 가진다.
class Bar {
  constructor() {
    this.x = 20;
  }
}
// Bar(생성자 함수)가 만들어짐.
// 그 안에 prototype 속성은 빈 객체(prototype 객체)를 가지고있다.
// 즉 객체가 2개 만들어짐.

std1 = new Student();

console.log(Student.__proto__);
console.log(Bar.__proto__);

// bar1 = new Bar();

// console.log(std1.prototype === bar1.prototype); // True

// bar1 = std1;
// console.log(bar1.x); // 2가 나옴.
