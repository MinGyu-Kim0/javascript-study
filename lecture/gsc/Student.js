// ./gsc/Student.js

// 첫번째 방법 (실무에서 선호하는 방법)
// named export
// export class Student {
export class Student {  // default 대표로 넘길 클래스 설정.
  name = undefined;     // import하는 쪽에선 클래스 이름을 알 필요가 없어짐.
  age = undefined;
  gender = undefined;

  constructor(argName, argAge, argGender) {
    this.name = argName;
    this.age = argAge;
    this.gender = argGender;
  }
}
export class Foo {constructor(argName) {this.name = argName;}}

// 두번째 방법
// export {Student, Foo}