// 함수를 정의하는 세 가지 방식
function a() {} // 함수 선언문. 함수명 a가 곧 변수명
a(); // 실행 ok

var b = function () {}; // (익명) 함수 표현식. 변수명 b가 곧 함수명
b(); // 실행 ok

var c = function d() {}; // 기명 함수 표현식. 변수명은 c, 함수명은 d.
c(); // 실행 ok
d(); // 에러!!

// 함수 선언문과 함수 표현식 (1) - 원본 코드
console.log(sum(1, 2));
console.log(multiply(3, 4));

// 함수 선언문 sum
function sum(a, b) {
  return a + b;
}

// 함수 표현식 multiply
var multiply = function (a, b) {
  return a * b;
};

// 함수 선언문과 함수 표현식 (2) - 호이스팅을 마친 상태
// 함수 선언문은 전체를 호이스팅한다.
var sum = function sum(a, b) {
  return a + b;
};
// 변수는 선언부만 끌어올린다.
var multiply;

console.log(sum(1, 2));
console.log(multiply(3, 4));

// 변수의 할당부는 원래 자리에 남겨둔다.
multiply = function (a, b) {
  return a * b;
};
