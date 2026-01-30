class Student {
    age = undefined;  // 생성자의 초기화 로직과 섞이면 보기가 불편
    name = undefined; // 멤버를 따로 빼둔다.
    static counter = 0; // JS -> Class MV -> add 'static' to a MV

    constructor(argAge, argName) {
        this.age = argAge; // ES6
        this.name = argName;
    }

}

std1 = new Student(20, "gsc");
// console.log(std1.counter);
console.log(Student.counter);