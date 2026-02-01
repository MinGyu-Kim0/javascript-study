class Student {
  constructor() {
    this.x = 2;
  }
}
std1 = new Student();
std2 = new Student();
print = console.log;

Student.prototype.prtX = function () {
  console.log("X");
};

std1.prtX();
std2.prtX();

// print(std1.__proto__ === Student.prototype);
// print(Student.prototype);
