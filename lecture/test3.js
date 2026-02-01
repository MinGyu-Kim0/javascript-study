class Student {
  // 1) Instance Member variable
  // 2) Instance Member method
  // 3) Class Member variable
  // 4) Class Member method

  name = ""; // ES 2022

  // Constructor
  // 동적 타이핑 언어는 new 시 빈 객체를 만들고 생성자(멤버변수)를 갖다 붙힘.
  // (class less object)
  // 인스턴스 변수를 갖다 붙힐때 초기화 작업 시(생성자)에 붙인다.
  constructor(argName) {
    // 1) Instance Member variable
    // name = argName; <- X
    this.name = argName;
  }
}

let std1 = new Student("kim");
let std2 = new Student("lee");

console.log(std1.name, std2.name); // kim lee
