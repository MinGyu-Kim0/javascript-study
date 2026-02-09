function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}
function Student(name, gender, shcool) {
  Person.call(this, name, gender);
  this.school = this.school;
}
function Employee(name, gender, company) {
  Person.apply(this, [name, gender]);
  this.company = company;
}
var by = new Student("보영", "female", "단국대");
var jn = new Employee("재난", "male", "구골");

// 여러 인수를 받는 메서드(Math.max/Math.min)에 apply를 적용
var numbers = [10, 20, 3, 16, 45];
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log(max, min); // 45 3

// ES6의 펼치기 연산자 활용
const numbers = [10, 20, 3, 16, 45];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max, min); // 45 3
