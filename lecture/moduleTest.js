// moduletest.js

import { Student } from "./gsc/Student.js"; // import에 객체가 있어야하는 이유
                                                 // 현재 student.js 파일을 읽어오는데
                                                  // 쓸거는 1개밖에 없다면 불필요하게 다 읽어올 필요가 없다.
                                                 // 객체에다가 필요한걸 나열해주면 됨!
let stdList = [];
stdList.push(new Student("Kim", 20, "M"));
stdList.push(new Student("Lee", 18, "M"));
stdList.push(new Student("Jung", 35, "F"));
stdList.push(new Student("Jeo", 40, "M"));

stdList.forEach(v => console.log(typeof(v.name), v =>(gender)));

// filter = 원본을 건드리지 않음. filter 조건에 맞는 새로운 리스트를 만들어낸다.
stdList.filter(v => v.gender === "F").forEach(v => console.log(v.name));

// 성별이 남자인 사람의 나이를 모두 더한 값 출력. 0은 초기 값
let sumAge = stdList.filter(v => v.gender === "M").reduce((acc, v) => acc += v.age, 0);
console.log(sumAge);

// 리스트안에 남자만 있는지 판별.
console.log(stdList.every(v => v.gender === "M"));

let sortedList = stdList.sort((a, b) => a.age - b.age);

console.log(sortedList);

// import defaultImport from "./gsc/Student.js";

// let std1 = new defaultImport("kim", 20, "M");     
// console.log(std1);                          

// let foo1 = new Foo("Foo");     
// console.log(foo1);