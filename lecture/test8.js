class Person {
    name = undefined; age = undefined;
    constructor(argName, argAge) { 
        this.name = argName;
        this.age = argAge;
    }

    prtInfo() {
        console.log(`name: ${this.name}, age"${this.age}`);
    }
}

class Student extends Person {
    dept = undefined;
    constructor(argName, argAge, argDept) {
        super(argName, argAget);
        this.dept = argDept;
    }
    prtInfo() {
        super.prtInfo();
        console.log(`dept: ${this.dept}, age${this.age}`);
    }
}