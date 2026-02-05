// Student.js
print = console.log;
// Getter/Setter
// -> a method to get or set a value
//      to the member variable (private)

class Student {
  #name = undefined;
  #age = undefined;

  constructor(argName, argAge) {
    this.#name = argName; // 초기 값을 설정하는건 가능
    this.#age = argAge; // 이후엔 외부에서 수정하지마라.
  }
  get name() {
    return this.#name;
  }
  get age() {
    return this.#age;
  }
  set name(argName) {
    this.#name = argName + "Hello";
  }
  set age(argAge) {
    this.#age = `Age: ${argAge}`;
  }
}

let std1 = new Student("gsc", 20); // 초기 값 set O -> 수정 X
print(std1.name, std1.age); // OK
std1.name = "YJU";
std1.age = 20;
print(std1.name, std1.age);

// std1.#name = 20; // Error
// std1.#age = -20; // Error
