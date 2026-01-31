// 자동으로 undefined를 부여하는 경우
var a;
console.log(a); // undefined. 값을 대입하지 않은 변수에 접근

var obj = { a: 1 };
console.log(obj.a); // 1
console.log(obj.b); // 존재하지 않는 프로퍼티에 접근
console.log(b); // ReferenceError: b is not defined

var func = function () {};
var c = func(); // 반환 값이 없으면 undefined를 반환한 것으로 간주
console.log(c); // undefined

// undefined와 배열
// 빈 배열을 만들고 배열의 크기를 3으로 함.
var arr1 = [];
arr1.length = 3;
// undefined조차도 할당되어 있지 않기 때문에 empty items 출력
console.log(arr1); // [ <3 empty items> ]

var arr2 = new Array(3);
console.log(arr2); // [ <3 empty items> ]

var arr3 = [undefined, undefined, undefined];
console.log(arr3); // [undefined, undefined, undefined]
